<?php
	// always include the database connection for all the file that queries in the database
	include('conn.php');
 
	$firstname=$_POST['firstname'];
	$lastname=$_POST['lastname'];
 
	mysqli_query($conn,"insert into `user` (firstname,lastname) values ('$firstname','$lastname')");
	header('location:index.php');
 
?>
