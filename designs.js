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

//create break Element
var br=document.createElement("br");
document.body.append(br);


//text field 2
var t2=document.createElement("SELECT");
var options= document.createElement("option");
t2.options.add( new Option("Computer Science and Engineering"," CSE") );
t2.options.add( new Option("Civil Engineering"," CIVIL") );
t2.options.add( new Option("Information Technology"," IT") );
t2.options.add( new Option("Electrical and Electronics Engineering","EEE") );
t2.options.add( new Option("Electronics and Communication Engineering","ECE") );
t2.options.add( new Option("Electronics and Instrumentation Engineering","EIE") );
t2.options.add( new Option("Mechanical Engineering","MECH") );
t2.options.add( new Option("Automobile Engineering","AUTO") );
t2.options.add( new Option("Production Engineering","PROD") );
document.write("Dept :");
t2.width=60;
document.body.appendChild(t2);

//create break Element
var br=document.createElement("br");
document.body.append(br);


//text field 3
var t3=document.createElement("input");
t3.type="text";
t3.id="t3";
document.write("Reg No. :");
t3.size=40;
document.body.appendChild(t3);

//create break Element
var br=document.createElement("br");
document.body.append(br);


//text field 4
var t4=document.createElement("input");
t4.type="text";
t4.id="t4";
document.write("DOB :");
t4.size=40;
document.body.appendChild(t4);

//create break Element
var br=document.createElement("br");
document.body.append(br);

//text field 5
var t5=document.createElement("input");
t5.type="text";
t5.setAttribute("id","t5");
t5.setAttribute("onkeyup","init()");
document.write("College Name:");
t5.size=40;
document.body.appendChild(t5);

//init
function init() {
    var input = document.getElementById('t5');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', init);

//create break Element
var br=document.createElement("br");
document.body.append(br);

//text field 6
var t6=document.createElement("input");
t6.type="text";
t6.id="t6";
document.write("College Code:");
t6.size=40;
document.body.appendChild(t6);

//create break Element
var br=document.createElement("br");
document.body.append(br);
