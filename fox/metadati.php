<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain");

$metadati = @file_get_contents("https://radio.radiostudiodoc.org/NowPlaying.txt");

if ($metadati === false) {
    http_response_code(500);
    echo "Errore nel recupero dei metadati";
} else {
    echo $metadati;
}
?>
