<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\TopChoice;

class TopChoiceController extends APIController
{
    public $synqtClass = 'App\Http\Controllers\SynqtController';
    public $merchantClass = 'Increment\Imarket\Merchant\Http\MerchantController';

    function __construct(){
        $this->model = new TopChoice();
    }

    public function retrieve(Request $request){
        $data = $request->all();
        $con = $data['condition'];
        $result = TopChoice::where($con[0]['column'], $con[0]['clause'], $con[0]['value'])->where('deleted_at', '=', null)->select('synqt_id', 'payload_value', 'account_id')->offset($data['offset'])->limit($data['limit'])->get();
        $synqts = null;
        $result = $result->groupBy('payload_value');
        $i = 0;
        $j = 0;
        if(sizeof($result) > 0){
            foreach($result as $key => $element) {
                $synqts[$i]['members'] = TopChoice::where('payload_value', '=', $key)->get();
                $synqts[$i]['synqt'] = app($this->synqtClass)->retrieveByParams('id', $con[0]['value']);
                $synqts[$i]['merchant'] = app($this->merchantClass)->getByParams('id', $key);
                foreach($synqts[$i]['members'] as $el) {
                    $el['name'] = $this->retrieveNameOnly($el->account_id);
                    $el['account'] = $this->retrieveAccountDetailsProfileOnly($el->account_id);
                    $j++;
                }
                $i++;
            }
        }
        $this->response['data'] = $synqts;
        return $this->response();
    }
}
