<?php

namespace Gondr\App;

class Library
{
    public static function sendJson($data)
    {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public static function getUser()
    {
        return __SIGN ? $_SESSION['user'] : null;
    }
}