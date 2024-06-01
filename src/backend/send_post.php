<?php
    header('Content-Type:text/html; charset=utf-8');

    $db = mysqli_connect('localhost', 'amicusdeveloper', 'a1s2d3f4!', 'amicusdeveloper');
    
    $title = $_POST['title'];
    $user = $_POST['user'];
    $content = $_POST['content'];
    $date = date('Y-m-d H:i:s');
    
    $sql = "INSERT INTO posts (title, user, content, date) VALUES ('$title', '$user', '$content', '$date')";
    $result = mysqli_query($db, $sql);
    
    if ($result) {
        echo json_encode(["message" => "게시글 저장성공"]);
    } else {
        echo json_encode(["error" => "게시글 저장 실패: " . mysqli_error($db)]);
    }
    
    mysqli_close($db);
?>