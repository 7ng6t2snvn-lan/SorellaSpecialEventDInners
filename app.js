
const PASSCODE = "0119"

function unlock(){
let code=document.getElementById("passcode").value
if(code===PASSCODE){
document.getElementById("login").style.display="none"
document.getElementById("app").classList.remove("hidden")
showTab("prep")
}else{
alert("Incorrect passcode")
}
}

function showTab(tab){
const content=document.getElementById("content")

if(tab==="prep"){
content.innerHTML=`<h2>Prep</h2>
<ul>
<li>3 Day Prep</li>
<li>2 Day Prep</li>
<li>Day Of Prep</li>
</ul>`
}

if(tab==="kitchen"){
content.innerHTML=`<h2>Kitchen</h2>
<ul>
<li>Station Assignments</li>
<li>Pickup Notes</li>
<li>Plating Notes</li>
</ul>`
}

if(tab==="timeline"){
content.innerHTML=`<h2>Timeline</h2>
<p>6:00 Guests seated</p>
<p>6:20 Course 1</p>
<p>6:45 Course 2</p>
<p>7:15 Course 3</p>`
}

if(tab==="menu"){
content.innerHTML=`<h2>Menu</h2>
<p>Menu details here</p>`
}

if(tab==="foh"){
content.innerHTML=`<h2>FOH</h2>
<p>Wine notes and service instructions</p>`
}

if(tab==="docs"){
content.innerHTML=`<h2>Documents</h2>
<p>Place PDFs in the /docs folder</p>`
}
}
