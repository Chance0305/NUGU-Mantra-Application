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
}
