<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin");
header('P3P: CP="CAO PSA OUR"'); 


require('html-start.html');

if(isset($_GET['elementsToGenerate'])){
    foreach ($_GET['elementsToGenerate'] as $element) {
        require ($element . '.html');
    }
} else {
    echo "Właśnie wygenerowałeś pustą stronę z dołączonym Bootstrapem. Myślę, że stać Cię na więcej ;)";
}
require('html-end.html');

?>