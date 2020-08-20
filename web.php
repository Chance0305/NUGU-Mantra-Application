<?php

use Gondr\App\Route;

if (isset($_SESSION['user'])) {
    Route::get("/", "MainController@index");

    Route::get("/menu", "MainController@menu");
    Route::get("/calendar","MainController@calendar");
    Route::get("/my", "MainController@my");


    Route::get("/meditation", "MainController@meditation");
} else {
    // Route::get("/", "MainController@login");
    Route::get("/", "MainController@init");
    Route::get("/login", "MainController@login");
    Route::get("/register", "MainController@register");
    Route::get("/evaluate","MainController@evaluate");

    Route::post("/user/register", "UserController@register_process");
    Route::post("/user/login", "UserController@login_process");
}

Route::get("/error", "MainController@error");
