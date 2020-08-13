<?php


namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;


class UserController
{

















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
