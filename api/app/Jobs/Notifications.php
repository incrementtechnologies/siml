<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Events\Notifications as EventNotifications;
use App\Events\Message;
use App\Events\MessageGroup;
use App\Events\SystemNotification;
use App\Http\Controllers\FirebaseController;
use Pusher\Pusher;
class Notifications implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $type;
    public $data;
    public $pusher;
    public function __construct($type, $data)
    {
        $this->type = $type;
        $this->data = $data;
        new FirebaseController();
        // if(env('PUSHER_TYPE') != 'self'){
        //     $options = array(
        //         'cluster' => env('OTHER_PUSHER_CLUSTER'),
        //         'useTLS' => true
        //     );
        //     $this->pusher = new Pusher(
        //         env('OTHER_PUSHER_APP_KEY'),
        //         env('OTHER_PUSHER_APP_SECRET'),
        //         env('OTHER_PUSHER_APP_ID'),
        //         $options
        //     );
        // }
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
      if($this->type === 'message') {
        $members = $this->data['members'];
        $condition = '';
        if(sizeof($members) > 0) {
          $i = 0;
          foreach($members as $m) {
            $condition .= '"'.env('APP_NAME').'-'.$m .'"'.' in topics';
            if($i != (sizeof($members) - 1)) {
              $condition .= ' || ';
            }
            $i++;
          }
        }
        $data = array(
          'condition' => $condition,
          'data'  => array(
            'data' => json_encode($this->data)
          ),
          'notification' => array(
            'title' => ucfirst($this->data['title']),
            'body'  => $this->data['message'],
            'imageUrl' => env('APP_URL').'/storage/logo/logo.png'
            )
          );
          Firebase::dispatch($data);
      } else if($this->type === 'ticket-comment') {
        $data = array(
          'topic' => env('APP_NAME').'-ticket-comment',
          'data'  => array(
            'data' => json_encode($this->data)
          ),
          'notification' => array(
            'title' => ucfirst($this->data['title']),
            'body'  => $this->data['text'],
            'imageUrl' => env('APP_URL').'/storage/logo/logo.png'
            )
          );
          app('App\Http\Controllers\FirebaseController')->sendNew($this->data);
      }
    }
}
