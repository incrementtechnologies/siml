<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $result = TopChoice::where($con[0]['column'], $con[0]['clause'], $con[0]['value'])->offset($data['offset'])->limit($data['limit'])->get();
        if(sizeof($result) > 0){
            $i = 0;
            foreach ($result as $key) {
                $result[$i]['synqt'] = app($this->synqtClass)->retrieveByParams('id', $result[$i]['synqt_id']);
                $result[$i]['merchant'] = app($this->merchantClass)->getByParams('id', $result[$i]['payload_value']);

                $i++;
            }
            $this->response['data'] = $result;
        }
        return $this->response();
    }
}
