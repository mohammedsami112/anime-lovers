<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('anime', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail');
            $table->text('description');
            $table->unsignedBigInteger('type');
            $table->unsignedBigInteger('status');
            $table->text('source');
            $table->text('start_from');
            $table->text('teaser');
            $table->text('mal_site');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('type')->on('anime_types')->references('id');
            $table->foreign('status')->on('anime_status')->references('id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anime');
    }
};
