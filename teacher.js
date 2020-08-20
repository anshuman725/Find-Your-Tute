function intest1()
	{
	var input1 = document.getElementById("name").value;
	if(input1.length == 0)
	{
	document.getElementById("pa1").innerHTML = "Please Enter a Valid Name.";
	}
	else
	document.getElementById("pa1").innerHTML = "";
	}
	
function intest2()
	{
	var input2 = document.getElementById("phone").value;
	if(input2.length == 10)
	{
	document.getElementById("pa2").innerHTML = "";
	}
	else
	document.getElementById("pa2").innerHTML = "Please Enter your Phone Number.";
	}
	
function intest3()
	{
	var input3 = document.getElementById("class").value;
	if(input3.length == 0)
	{
	document.getElementById("pa3").innerHTML = "Please Enter Your Class.";
	}
	else
	document.getElementById("pa3").innerHTML = "";
	}
	
function intest4()
	{
	var input3 = document.getElementById("mail").value;
	if(input3.length == 0)
	{
	document.getElementById("pa4").innerHTML = "Please Enter a Valid email.";
	}
	else
	document.getElementById("pa4").innerHTML = "";
	}
function intest5()
	{
	var input5 = document.getElementById("fee").value;
	if(input5.length == 0)
	{
	document.getElementById("pa5").innerHTML = "Please Enter your Fee.";
	}
	else
	document.getElementById("pa5").innerHTML = "";
	}

	
