
function click()
{	
			document.getElementById("changeColorDiv").style.backgroundColor="red";
}
function doimau()
{
	$("body h1").css("color", "red");
}
function new1(tab){
    var s1= document.tab.some1.value;  
    var s2= document.tab.some2.value; 
	var s3= document.tab.some3.value;
    if(s1<1)
    {
         document.getElementById("1").innerHTML= "A number is request";       
    }
    else
    {    
        document.getElementById("1").innerHTML=null;
    } 
    if((s2.text)%10==0)
    {
        document.getElementById("2").innerText= "";
    }
    else
    {
        document.getElementById("2").innerText= "The number should be divisible by 10";
    }
    if(s3.length>=7)
    {
        document.getElementById("3").innerText= "";
    }
    else
    {
        document.getElementById("3").innerText= "the num ber should be at least 7 digits";
    }
}
function changeContent()
{
    var table=document.getElementById("myTable");
    var row=table.insertRow(2);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML="1";
    cell2.innerHTML="2";
}