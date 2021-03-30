<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Synqt;

class SynqtController extends APIController
{
    function __construct(){
        $this->model = new Synqt();
        $this->notRequired = array('title');
    }

    public function create(Request $request){
        $data = $request->all();
    	$data['code'] = $this->generateCode();
    	$this->model = new Synqt();
    	$this->insertDB($data);
    	return $this->response();
    }

    public function generateCode(){
        $code = 'SY_'.substr(str_shuffle($this->codeSource), 0, 61);
        $codeExist = Synqt::where('code', '=', $code)->get();
        if(sizeof($codeExist) > 0){
          $this->generateCode();
        }else{
          return $code;
        }
    }

    public function retrieveByParams($column, $value){
        $result = Synqt::where($column, '=', $value)->where('deleted_at', '=', null)->get();
        $result[0]['date_at_human'] = Carbon::createFromFormat('Y-m-d', $result[0]['date'])->copy()->tz($this->response['timezone'])->format('F j, Y');
        return sizeof($result) > 0 ? $result : [];
    }

}
