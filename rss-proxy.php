<?php
header('Content-Type: application/json; charset=utf-8');
$rss_url = isset($_GET['url']) ? $_GET['url'] : '';
if (!$rss_url) {
    echo json_encode(['error' => 'Missing RSS URL']);
    exit;
}

$rss = @simplexml_load_file($rss_url);
if (!$rss) {
    echo json_encode(['error' => 'Unable to load RSS']);
    exit;
}

$items = [];
foreach ($rss->channel->item as $item) {
    $enclosure = isset($item->enclosure['url']) ? (string)$item->enclosure['url'] : '';
    $items[] = [
        'title' => (string)$item->title,
        'link' => (string)$item->link,
        'thumbnail' => $enclosure
    ];
}

echo json_encode(['items' => $items]);
