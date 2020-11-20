<?php
header('Access-Control-Allow-Origin: *', false);
header('Content-Type: application/json', false);


$existing = file_get_contents("./posts.json");
$escaped = substr($existing, 1);

$JsonHandle = fopen("./posts.json", 'w');

$JsonData = '[
    {
        "label": "' . $_GET['label'] . '",
        "img": "' . substr($_GET['linkimg'], 0, 50) . '"
    },';
fwrite($JsonHandle, $JsonData . $escaped);


header("Location: ../index.html");
die();