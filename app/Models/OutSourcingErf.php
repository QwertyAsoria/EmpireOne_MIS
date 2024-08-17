<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OutSourcingErf extends Model
{
    use HasFactory;
    protected $table = 'outsourcing_erf';
    public $timestamps = false;
    protected $fillable = [
        'user_id',
        'ref_id',
        'jobTitle',
        'jobType',
        'personnel',
        'dateNeed',
        'positionStatus',
        'department',
        'sourcingMethod',
        'justification',
        'budgetCost',
        'submitted',
        'status',
        'site',
        'decided',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class,"id","user_id");
    }
}
