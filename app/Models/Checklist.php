<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checklist extends Model
{
    use HasFactory;
    protected $table = 'checklist';
    public $timestamps = false;
    protected $fillable = [
        'reqs',
        'remarks',
        'site',
    ];
}
