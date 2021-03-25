<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Synqt;

class SynqtController extends APIController
{
    function __construct(){
        $this->model = new Synqt();
    }
}
