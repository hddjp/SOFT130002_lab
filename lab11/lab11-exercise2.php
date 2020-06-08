<html lang="en">
<head>

<!-- Latest compiled and minified Bootstrap Core CSS -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>Exercise 11-1 | Using Cookies</title>
</head>

<body>
<header>
</header>


<?php

session_start();
require_once("config.php");
function getLoginForm(){
   return "
<form action='' method='post' role='form' id='form'>
<div class ='form-group'>
  <label for='username'>Username</label>
  <input type='text' name='username' class='form-control'/>
</div>
<div class ='form-group'>
  <label for='pword'>Password</label>
  <input type='password' name='pword' class='form-control'/>
</div>
<input type='submit' value='Login' class='form-control' id='submit' />

</form>";
}
function validLogin(){  
  $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);  
  //very simple (and insecure) check of valid credentials. 
  $sql = "SELECT * FROM Credentials WHERE Username=:user and Password=:pass";  

  $statement = $pdo->prepare($sql);   
  $statement->bindValue(':user',$_POST['username']);   
  $statement->bindValue(':pass',$_POST['pword']);   
  $statement->execute();   
  if($statement->rowCount()>0){  
        return true;  
  }  
  return false;  
}
?>
 <div class="container theme-showcase" role="main">  
      <div class="jumbotron">
        <h1>
<?php
if(isset($_SESSION['Username'])){
  echo "Welcome ".$_SESSION['Username'];
} 
else{  
  echo "No Post detected";  
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {  
  if(validLogin()){  
    // add 1 day to the current time for expiry time   
    $expiryTime = time()+60*60*24;  
    $_SESSION['Username']=$_POST['username'];
    echo "<script language=JavaScript> window.location.href=window.location.href;
    </script>";
}
   else{  
      echo "<script>document.getElementsByTagName('h1')[0].firstChild.nodeValue='';</script>";
      echo "login unsuccessful";  
   }  
}


?>

</h1>
      </div>
<?php  
if(!isset($_SESSION['Username'])){
  echo getLoginForm();
} else{
  echo "This is some contents <br>";
  echo "<button id='logoutbt'>LOGOUT</button>"; 

}?>
 </div>
</body>

<script>
var logoutbt=document.getElementById("logoutbt");
  if(logoutbt instanceof Object){
    
    logoutbt.addEventListener("click",function(){
    var xhr=new XMLHttpRequest();
    var url="./logout.php?con=1";
    xhr.open("get",url);
    xhr.send(null);
    document.location.href=document.location.href;
  });
  }

</script>
</html>
