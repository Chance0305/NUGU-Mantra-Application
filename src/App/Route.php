<?php

namespace Gondr\App;

class Route
{
    public static $actions = [];

    public static function __callStatic($method, $args)
    {
        $req = strtolower($_SERVER['REQUEST_METHOD']);

        if ($req == $method) {
            self::$actions[] = $args;
        }
    }

    public static function init()
    {
        // echo $_SERVER['REQUEST_URI'] . "<br>";
        $path = explode("?", $_SERVER['REQUEST_URI']);
        $path = $path[0];
        // echo $path;



        foreach (self::$actions as $req) {

            // $preg = preg_replace("/", "\/", $req);
            // $preg = preg_replace("{[^\{\}]+}", "([^\/]+)", $preg);
            // $result = preg_match($preg, $path, $match);

            if ($req[0] === $path) {
                $action = explode("@", $req[1]);
                $controller = 'Gondr\\Controller\\' . $action[0];
                $controllerInstance = new $controller();
                $controllerInstance->{$action[1]}();
                return;
            }
        }
        echo "<script>";
        echo "location.href='/error'";
        echo "</script>";
    }
}