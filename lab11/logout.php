<?php  
if($_GET['con']==1){

unset($_SESSION['Username']);
$_SESSION = array();
setcookie(session_name(), '', time() - 2592000, '/');
session_destroy();

setcookie("Username","",-1);
header("Location: ".$_SERVER['HTTP_REFERER']); }
?>