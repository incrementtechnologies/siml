<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\TopChoice;

class TopChoiceController extends APIController
{
    public $synqtClass = 'App\Http\Controllers\SynqtController';
    public $merchantClass = 'Increment\Imarket\Merchant\Http\MerchantController';
    public $ratingClass = 'Increment\Common\Rating\Http\RatingController';
    public $locationClass = 'Increment\Imarket\Location\Http\LocationController';

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
                $synqts[$i]['members'] = TopChoice::where('payload_value', '=', $key)->where('synqt_id', '=', $con[0]['value'])->get();
                $synqts[$i]['synqt'] = app($this->synqtClass)->retrieveByParams('id', $con[0]['value']);
                $synqts[$i]['merchant'] = app($this->merchantClass)->getByParams('id', $key);
                $synqts[$i]['rating'] = app($this->ratingClass)->getRatingByPayload('merchant_id', $key);
                $synqts[$i]['total_super_likes'] = $this->countByParams('payload_value', $key, 'super-like');
                $synqts[$i]['distance'] = app($this->locationClass)->getLocationDistance('account_id', $synqts[$i]['merchant']['account_id'], $con[0]['value']);
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

    public function retrieveActivities(Request $request) {
        $data = $request->all();
        $con = $data['condition'];
        $result = TopChoice::where($con[0]['column'], $con[0]['clause'], $con[0]['value'])->where($con[1]['column'], $con[1]['clause'], $con[1]['value'])->where('deleted_at', '=', null)->select('synqt_id', 'payload_value', 'account_id')->offset($data['offset'])->limit($data['limit'])->get();
        $synqts = null;
        $i = 0;
        $j = 0;
        if(sizeof($result) > 0){
            foreach($result as $element) {
                $synqts[$i]['members'] = TopChoice::where('payload_value', '=', $element->payload_value)->where('synqt_id', '=', $element->synqt_id)->get();
                $synqts[$i]['synqt'] = app($this->synqtClass)->retrieveByParams('id', $element->synqt_id);
                $synqts[$i]['merchant'] = app($this->merchantClass)->getByParams('id', $element->payload_value);
                $synqts[$i]['rating'] = app($this->ratingClass)->getRatingByPayload('merchant_id', $element->payload_value);
                $synqts[$i]['total_super_likes'] = $this->countByParams('payload_value', $element->payload_value, 'super-like');
                $synqts[$i]['distance'] = app($this->locationClass)->getLocationDistance('account_id', $synqts[$i]['merchant']['account_id'], $con[0]['value']);
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

    public function countByParams($column, $value, $status){
        $result = TopChoice::where($column, '=', $value)->where('status', '=', $status)->count();
        return $result;
    }
}
