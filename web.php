<?php

use Gondr\App\Route;

if (isset($_SESSION['user'])) {
    Route::get("/", "MainController@index");

    Route::get("/menu", "MainController@menu");
    Route::get("/calendar", "MainController@calendar");
    Route::get("/my", "MainController@my");
    Route::get("/evaluate","MainController@evaluate");


    Route::get("/meditation", "MainController@meditation");
    Route::get("/white_noise", "MainController@white_noise");
    Route::get("/sleep", "MainController@sleep");
    Route::get("/logout","UserController@logout");
} else {
    // Route::get("/", "MainController@login");
    Route::get("/", "MainController@init");
    Route::get("/login", "MainController@login");
    Route::get("/register", "MainController@register");

    Route::post("/user/register", "UserController@register_process");
    Route::post("/user/login", "UserController@login_process");
}

Route::get("/error", "MainController@error");
