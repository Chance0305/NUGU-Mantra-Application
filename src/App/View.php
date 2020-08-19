<?php

namespace Gondr\App;

class View
{
    public function __construct($page, $data)
    {
        extract($data);

        require_once(__VIEWS . __DS . "layout" . __DS . "header.php");
        require_once(__VIEWS . __DS . "layout" . __DS . "alert.php");
        require_once(__VIEWS . __DS . "layout" . __DS . "splash.php");

        if (__SIGN) require_once(__VIEWS . __DS . "layout" . __DS . "top.php");
        require_once(__VIEWS . __DS . "{$page}.php");

        if (__SIGN) require_once(__VIEWS . __DS . "layout" . __DS . "bottom.php");
    }
}
