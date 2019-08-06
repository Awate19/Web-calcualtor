function abc()
{
var z=["x0","x1","x2","x3","x4","x5","x6","x7","x8","x9",];
for(i=0;i<z.length;i++)
{
var ele=document.getElementById(z[i]);
ele.value=i;
ele.addEventListener("click", abcd);
  
}
}

function abcd()
{
    var txt=document.getElementById("text1");//this the input type text element
    if (txt.value=="")
    {
      
        txt.value=this.value;
    }
    else
    {
        var num=txt.value;
        num=num+this.value;
        txt.value=num;
    }
}
