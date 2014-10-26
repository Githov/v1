<?php

require_once 'db_conection.php';

$brandname = $_POST['brand'];
$floor = $_POST['floor'];
$storenumber = $_POST['storenumber'];
$website = $_POST['website'];
$fb = $_POST['fb'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];

$result = mysqli_query($con,"UPDATE General_admin SET Floor = '$floor', StoreNumber= '$storenumber', Website = '$website', Facebook = '$fb', Telephone = '$telephone', Email = '$email'  WHERE BrandName = '$brandname'");
if($result){
    echo true;
}
    ?>