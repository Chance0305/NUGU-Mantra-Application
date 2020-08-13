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

    public function splash()
    {
        
    }
}