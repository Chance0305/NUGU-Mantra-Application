<?php

namespace Gondr\App;

class DB
{
    private static $db = null;

    public static function getDB()
    {
        if (is_null(self::$db)) {
            self::$db = new \PDO(
                "mysql:host=gondr.asuscomm.com; dbname=wlsdn030107; charset=utf8mb4",
                "wlsdn030107",
                "1234"
            );
        }

        return self::$db;
    }

    //삽입,삭제, 수정
    public static function execute($sql, $data = [])
    {
        $q = self::getDB()->prepare($sql);
        return $q->execute($data);
    }
    //조회
    public static function fetch($sql, $data = [], $mode = \PDO::FETCH_OBJ)
    {
        $q = self::getDB()->prepare($sql);
        $q->execute($data);
        return $q->fetch($mode);
    }
    //여러개 조회
    public static function fetchAll($sql, $data = [], $mode = \PDO::FETCH_OBJ)
    {
        $q = self::getDB()->prepare($sql);
        $q->execute($data);
        return $q->fetchAll($mode);
    }
    //마지막 삽입된 오토인크리먼트 값 조회
    public static function lastId()
    {
        return self::getDB()->lastInsertId();
    }
}
