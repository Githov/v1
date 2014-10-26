 <?php

require_once 'db_conection.php';

$brandname = $_POST['brand'];

$result = mysqli_query($con, "SELECT * FROM General_admin WHERE BrandName = '$brandname'");
$row=  mysqli_fetch_array($result);
if($row['BrandName'] == $brandname){
    echo true;
}
    ?>