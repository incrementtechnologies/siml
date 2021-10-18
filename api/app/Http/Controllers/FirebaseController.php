<?php

namespace App\Http\Controllers;
use Kreait\Firebase\Factory;
use Illuminate\Http\Request;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use Kreait\Firebase\Messaging;
use Exception;
class FirebaseController extends APIController
{
  public $messaging;
  function __construct(){
  	$path = 'Http\Controllers\synqt-8e87c-firebase-adminsdk-f7ikd-ce253166b1.json';
  	if(env('OS') == 'linux'){
  		$path = 'Http/Controllers/synqt-8e87c-firebase-adminsdk-f7ikd-ce253166b1.json';
  	}
  	$factory = (new Factory)->withServiceAccount(app_path($path));
  	$this->messaging = $factory->createMessaging();
  }


  public function send(Request $request){
  	$data = $request->all();
    try{
      $message = CloudMessage::fromArray([
        'topic' => $data['topic'],
        'notification' => $data['notification'], // optional
        'data' => $data['data'], // optional
      ]);
      $this->messaging->send($message);
    }catch(Exception $e){
      //
    }
  }

  public function sendLocal($data){
  	$message = CloudMessage::fromArray([
	    'topic' => $data['topic'],
	    'notification' => $data['notification'], // optional
	    'data' => $data['data'], // optional
		]);
		$this->messaging->send($message);
  }

  public function sendFromJob($data){
    try {
      $this->messaging->send(CloudMessage::fromArray($data));
    } catch (Exception $e) {
        Log::debug($e);
    }
  }


  public function sendNew($data){
    try{
      $message = CloudMessage::fromArray($data);
      $this->messaging->send($message);
    }catch(Exception $e){
      //
    }
  }

}
