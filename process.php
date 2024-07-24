<?php

$img = $_FILES["image"];

$path = "resource//".uniqid().".png";

move_uploaded_file($img["tmp_name"],$path);

$con = new mysqli("localhost","root","Abi0021@","d23","3306");

$q = "INSERT INTO `image` (`path`) VALUES ('".$path."')";

$con->query($q);

echo($path);


?>