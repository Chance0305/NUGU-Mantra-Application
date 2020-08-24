<?php


namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;


class UserController
{

    public function login_process()
    {
        $id = htmlentities($_POST['user_id']);
        $password = htmlentities($_POST['user_password']);
        $auto_login = $_POST['user_auto_login'];

        $sql = "SELECT * FROM `mantra_users` WHERE `user_id` = ? AND `user_password` = PASSWORD(?)";
        $user = DB::fetch($sql, [$id, $password]);

        if ($user) {
            $_SESSION['user'] = $user;
            // 자동로그인 제외 구현
        }

        Library::sendJson(["result" => $user == true]);
    }

    public function register_process()
    {
        $name = htmlentities($_POST['name']);
        $id = htmlentities($_POST['id']);
        $pass = htmlentities($_POST['pass']);
        $date = $_POST['date'];
        $gender = $_POST['gender'];
        $default_img_path = 'imgs/user_icon.png';

        $sql = "INSERT INTO `mantra_users`(`user_idx`, `user_id`, `user_name` ,`user_password`, `user_birthday`, `user_gender` , `user_img`)
         VALUES (null , ? , ? , PASSWORD(?) , ? , ? , ?)";
        $result = DB::execute($sql, [$id, $name, $pass, $date, $gender,$default_img_path]);
        Library::sendJson(["register" => $result]);
    }

    public function logout()
    {
        unset($_SESSION['user']);
        Library::moveLink("/");
    }
}
