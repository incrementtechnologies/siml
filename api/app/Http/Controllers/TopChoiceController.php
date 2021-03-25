<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TopChoice;

class TopChoiceController extends APIController
{
    function __construct(){
        $this->model = new TopChoice();
    }
}
