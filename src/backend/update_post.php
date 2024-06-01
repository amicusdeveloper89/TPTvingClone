<?php
    header('Content-Type:text/html; charset=utf-8');

    $db = mysqli_connect('localhost', 'amicusdeveloper', 'a1s2d3f4!', 'amicusdeveloper');

    $no = $_POST['no'];
    $title = $_POST['title'];
    $user = $_POST['user'];
    $content = $_POST['content'];

    $sql = "UPDATE posts SET title = '$title', user = '$user', content = '$content' WHERE no = $no";
    $result = mysqli_query($db, $sql);

    if ($result) {
        echo json_encode(["message" => "게시글 수정 성공"]);
    } else {
        echo json_encode(["error" => "게시글 수정 실패: " . mysqli_error($db)]);
    }

    mysqli_close($db);
?>
