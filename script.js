function confirmDelete(id) {
	var ok = confirm("Are you sure you want to delete this record ????"+id);
	document.getElementById('demo').innerHTML = 'Are you sure you want to delete this record ????'+id;
	if(ok)
	{
		location.href='delete.php?id='+id;
	}
	else {
		document.getElementById('demo').innerHTML = 'You have not deleted';
	}
	return ok;
	
}

function welcome() {
	//alert('Welcome to the Website');
}

setTimeout(welcome, 3000);
