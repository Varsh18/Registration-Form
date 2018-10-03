/* set background color*/
document.body.style.backgroundColor="rgba(24, 220, 255,1.0)";

/*create heading for the webpage*/
var h1=document.createElement("H1");
var t=document.createTextNode("Registration Form");
h1.style.textAlign="center";
h1.style.color="#c56cf0";
h1.appendChild(t);
document.body.appendChild(h1);

//text field 1
var t1=document.createElement("input");
t1.type="text";
t1.id="t1";
document.write("Name           :");
t1.size=40;
document.body.appendChild(t1);

//style for body
document.body.style.textAlign="center";
document.body.style.color="#f1c40f";
