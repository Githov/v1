 <?php

require_once 'db_conection.php';

$brandname = $_POST['brand'];
$floor = $_POST['floor'];
$storenumber = $_POST['storenumber'];
$website = $_POST['website'];
$fb = $_POST['fb'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];

$result = mysqli_query($con,"INSERT INTO General_admin(BrandName, Floor, StoreNumber, Website, Facebook, Telephone, Email) 
         VALUES ('$brandname', '$floor', '$storenumber', '$website', '$fb', '$telephone', '$email')");
if($result){
    echo true;
}
    ?>