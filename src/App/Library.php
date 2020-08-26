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

    public static function moveLink($link)
    {
        echo "<script>";
        echo "location.href = '$link';";
        echo "</script>";
    }

    public static function getUserType()
    {
        if(!isset($_SESSION['user'])) return null;
        $sql = "SELECT count(*) as `cnt` FROM `mantra_record` WHERE `user_idx` = ?";
        $cnt = DB::fetch($sql,[$_SESSION['user']->user_idx])->cnt;
        $idx = $cnt/20;
        if($idx > 5) $idx = 5;
        $arr = ["명상 병아리","명상 초보","명상 중수","명상 고수","명상 마스터","명상의 신"];
        return $arr[$idx];

    }
}