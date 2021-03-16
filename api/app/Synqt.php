<?php

namespace Increment\Marketplace\Models;
use Illuminate\Database\Eloquent\Model;
use App\APIModel;
class Synqt extends APIModel
{
    protected $table = 'synqt';
    protected $fillable = ['code', 'account_id', 'title', 'location_id', 'date', 'details', 'status'];
}
