<?php
    header('Content-Type:text/html; charset=utf-8');

    $db = mysqli_connect('localhost', 'amicusdeveloper', 'a1s2d3f4!', 'amicusdeveloper');

    $sql = "SELECT * FROM posts WHERE no=$no";
    $result = mysqli_query($db, $sql);

    $board = mysqli_fetch_array($result, MYSQLI_ASSOC);

    $no = $board['no'];
    $title = $board['title'];
    $user = $board['user'];
    $content = $board['content'];
    $date = $board['date'];

    $content = nl2br($content);

    mysqli_close($db);
?>
