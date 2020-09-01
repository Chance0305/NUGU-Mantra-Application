<?php


namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;


class RecordController
{
    public function getRecord()
    {
        $idx = $_POST['idx'];
        $date = $_POST['date'];

        $sql = "SELECT * FROM mantra_record WHERE user_idx = ? and date = ?";
        $result = DB::fetch($sql, [$idx, $date]);
        Library::sendJson($result);
    }

    public function insertRecord()
    {
        
        $comment = $_POST['comment'];
        $score = $_POST['score'];
        $user_idx = Library::getUser()->user_idx;
        $date = date('yy-n-j');

        $sql = "INSERT INTO `mantra_record`(`record_idx`, `user_idx`, `date`, `score`, `comment`) VALUES (null,?,?,?,?)";
        $datas = [$user_idx,$date,$score,$comment];
        $result = DB::execute($sql,$datas);
        Library::sendJson($result);
    }

    public function loadRecord()
    {
        $date = $_POST['date'];
        $user_idx = Library::getUser()->user_idx;
        $sql = 'SELECT * FROM `mantra_record` WHERE `date` = ? AND `user_idx` = ?';
        $record = DB::fetch($sql,[$date,$user_idx]);
        Library::sendJson(["record"=>$record]);
    }
}
