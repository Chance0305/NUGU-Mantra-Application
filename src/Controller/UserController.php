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
        $id = htmlentities($_POST['id']);
        $pass = htmlentities($_POST['pass']);
        $date = $_POST['date'];
        $gender = $_POST['gender'];

        $sql = "INSERT INTO `mantra_users`(`user_idx`, `user_id`, `user_password`, `user_birthday`, `user_gender`)
         VALUES (null , ? , PASSWORD(?) , ? , ?)";
        $result = DB::execute($sql, [$id, $pass, $date, $gender]);
        Library::sendJson(["register" => $result]);
    }
}
