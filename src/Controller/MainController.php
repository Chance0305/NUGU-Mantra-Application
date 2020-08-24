<?php

namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;
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
    
    public function meditation()
    {
        $this->render("meditation");
    }

    public function evaluate()
    {

        $sql = "SELECT * FROM `mantra_record` WHERE `user_idx` = ? AND `date` = ?";
        $user_idx = Library::getUser()->user_idx;
        $date_str = date('yy-n-d');
        $exist = DB::execute($sql,[$user_idx,$date_str]);

        $this->render("evaluate",["exist"=>$exist]);
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
