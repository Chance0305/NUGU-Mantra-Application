<?php

use Gondr\App\Route;

if (isset($_SESSION['user'])) {
    Route::get("/", "MainController@index");
} else {
    Route::get("/", "MainController@login");
    Route::get("/register" , "MainController@register");
}
