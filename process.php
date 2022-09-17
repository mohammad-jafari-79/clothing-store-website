<?php
session_start();
$servername = "localhost";
$username = "star";
$password = "shopmestar";
$dbname = "star";
$pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if (isset($_POST['sub'])) {
    if ($_POST['sub'] == "ثبت نام") {
        $name = $_POST['name'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $pass1 = $_POST['pass1'];
        $pass2 = $_POST['pass2'];
        $mob = $_POST['mob'];
        $address = $_POST['address1'] . " - " . $_POST['address2'];
        $sql = "INSERT INTO users (`fname`, `lname`,`email`,`pass`,`mob`,`address`,`credit`,`state` ) VALUES (?,?,?,?,?,?,?,?)";
        $pdo->prepare($sql)->execute([$name, $lname, $email, $pass1, $mob, $address, "0", "1"]);
        setlogin($email);
        echo '1';
    }
    if ($_POST['sub'] == "ورود") {
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $sql = "SELECT * from users where `email`=:email and `pass`=:pass ";
        $sth = $pdo->prepare($sql);
        $sth->bindParam(':email', $email, PDO::PARAM_STR);
        $sth->bindParam(':pass', $pass, PDO::PARAM_STR);
        $sth->execute();
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            echo '0';
        } else {
            setlogin($email);
            echo '1';
        }
    }
}
// check login
if (isset($_GET['islogin'])) {
    if (@$_SESSION['HTTP_USER_AGENT'] != md5($_SERVER['HTTP_USER_AGENT']) || @$_SESSION['HTTP_USER'] != md5(@$_SESSION['HTTP_USER_STAMP']) || $_COOKIE["login"] != md5("myhash")) {
        echo '0';
    } else {
        echo $_SESSION['HTTP_USER_NAME'];
    }
}
//  filter search
if (isset($_GET['filter'])) {
    $sqlfilt = "";
    if (@$_GET['feriolli'] == 0) {
        $sqlfilt.= " and `brand` not like 'فریولی(feriolli)' ";
    }
    if (@$_GET['massimi'] == 0) {
        $sqlfilt.= " and `brand` not like 'ماسیمو دوتی(massimi dutti)' ";
    }
    if (@$_GET['fred'] == 0) {
        $sqlfilt.= " and `brand` not like 'فرد(fred)' ";
    }
    if (@$_GET['black'] == 0) {
        $sqlfilt.= " and `color` not like 'مشکی' ";
    }
    if (@$_GET['white'] == 0) {
        $sqlfilt.= " and `color` not like 'سفید' ";
    }
    if (@$_GET['small'] == 1) {
        $sqlfilt.= " and `size` like '%-S-%' ";
    }
    if (@$_GET['medium'] == 1) {
        $sqlfilt.= " and `size` like '%-M-%' ";
    }
    if (@$_GET['large'] == 1) {
        $sqlfilt.= " and `size` like '%-L-%' ";
    }
    if (@$_GET['xlarg'] == 1) {
        $sqlfilt.= " and `size` like '%-XL-%' ";
    }
    if (@$_GET['xxlarg'] == 1) {
        $sqlfilt.= " and `size` like '%-XXL-%' ";
    }
    if (@$_GET['pricerange0'] == 1) {
        $sqlfilt.= "";
    }
    if (@$_GET['pricerange1'] == 1) {
        $sqlfilt.= " and `price` <=200000 ";
    }
    if (@$_GET['pricerange2'] == 1) {
        $sqlfilt.= " and `price` >200000 and `price` <=300000";
    }
    if (@$_GET['pricerange3'] == 1) {
        $sqlfilt.= " and `price` >300000 and `price` <=400000";
    }
    if (@$_GET['pricerange4'] == 1) {
        $sqlfilt.= " and `price` >400000 and `price` <=500000";
    }
    if (@$_GET['pricerange5'] == 1) {
        $sqlfilt.= " and `price` >500000 and `price` <=600000";
    }
    if (@$_GET['pricerange6'] == 1) {
        $sqlfilt.= " and `price` >600000 ";
    }
    $sql = "SELECT * from products where `id`>0 $sqlfilt";
    $sth = $pdo->prepare($sql);
    $sth->execute();
    $row = $sth->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}
function setlogin($username) {
    setcookie("login", md5("myhash"), time() + 655500);
    $_SESSION['HTTP_USER_AGENT'] = md5($_SERVER['HTTP_USER_AGENT']);
    $_SESSION['HTTP_USER_STAMP'] = time();
    $_SESSION['HTTP_USER'] = md5($_SESSION['HTTP_USER_STAMP']);
    $_SESSION['HTTP_USER_NAME'] = $username;
}
