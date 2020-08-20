<?php

namespace Gondr\Controller;

use Gondr\App\View;

class MainController extends MasterController
{
    public function index()
    {
        $this->render("main");
    }

    public function error()
    {
        $this->render("error");
    }

    public function login()
    {
        $this->render("login");
    }

    public function register()
    {
        $this->render("register");
    }

    public function init()
    {
        $this->render("init");
    }

    public function calendar()
    {
        $this->render("calendar");
    }


    public function menu()
    {
        $this->render("menu");
    }

    public function my()
    {
        $this->render("my");
    }
}
