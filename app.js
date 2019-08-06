var ans
var op=""
var finalOp=""
function abc()
{
    
var z=["x0","x1","x2","x3","x4","x5","x6","x7","x8","x9",];
for(i=0;i<z.length;i++)
{
var ele=document.getElementById(z[i]);
ele.value=i;
ele.addEventListener("click", abcd);
  
}
var op=["plus","minus","times","divi"];
for(i=0;i<op.length;i++)
{
var ele=document.getElementById(op[i]);
ele.addEventListener("click", operators1);
  
}
document.getElementById("eq").addEventListener("click",EQ)
}

function EQ()
{
   var num2=Number(document.getElementById("text1").value);
if(finalOp=="plus")
{
ans=ans+num2;
document.getElementById("text1").value=ans;
}
else if (finalOp=="minus")
{
ans=ans-num2;
document.getElementById("text1").value=ans;
}
if(finalOp=="times")
{
ans=ans*num2;
document.getElementById("text1").value=ans;
}
if(finalOp=="divi")
{
ans=ans/num2;
document.getElementById("text1").value=ans;
}
}


function operators1()
{
op=this.id;
ans=Number(document.getElementById('text1').value);
}


function abcd()
{
    var xxx=this.value
    var txt=document.getElementById("text1");//this the input type text element
    if(op=="")
    {
    if (txt.value=="")
    {
        txt.value=xxx;
    }
    else
    {
        var num=txt.value;
        num=num+xxx;
        txt.value=num;
    }
    }
    else
    {
        txt.value="";
        txt.value=xxx;
        finalOp=op;
    }



}
