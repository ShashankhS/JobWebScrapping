<?php
	$dir = "/var/www/html/JobWebScrapping/ScrappingResults";
	$list = scandir($dir);
	$data = array();

	for($i = 2; $i < count($list); $i++){
		$path = "/var/www/html/JobWebScrapping/ScrappingResults/".$list[$i];
		$data = array_merge($data, json_decode(file_get_contents($path)));
	}

	$file = fopen("/var/www/html/JobWebScrapping/CombinedResults/allResults.json", "w");
	$json = json_encode($data);
	fwrite($file, $json);

?>