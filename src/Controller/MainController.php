<?php

namespace Gondr\Controller;

use Gondr\App\DB;

class MainController extends MasterController
{
    public function index()
    {
        $idx = $_SESSION['user']->user_idx;
        $sql = "SELECT * FROM mantra_record WHERE user_idx = ?";


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

    public function meditation()
    {
        $this->render("meditation");
    }

    public function evaluate()
    {
        $this->render("evaluate");
    }

    public function white_noise()
    {
        $this->render("white_noise");
    }

    public function sleep()
    {
        $this->render("sleep");
    }
}
