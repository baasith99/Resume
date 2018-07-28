function loadjson(file,callback) {
	var	xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if(xhr.readyState ===4 && xhr.status===200) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
	edu(data.education);
	skill(data.skills);
})

var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(basicdetails){
var image=document.createElement("img");
image.src=basicdetails.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=basicdetails.name;
left.appendChild(name);
var email=document.createElement("h2")
email.textContent=basicdetails.email;
left.appendChild(email);
var phone=document.createElement("h2");
phone.textContent=basicdetails.phone;
left.appendChild(phone);
}
var main=document.querySelector(".main");
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var h1=document.createElement("h1");
	h1.textContent="Educational Information";
	h1.appendChild(document.createElement("HR"));
	right.appendChild(h1);
	var un=document.createElement("ul");
	right.appendChild(un);
	for(var i = 0;i < education.length;i++){
		var l=document.createElement("h3");
		var l1=document.createElement("li");
		var l2=document.createElement("li");
		l.textContent=education[i].course;
		l1.textContent=education[i].college;
		l2.textContent=education[i].percentage;
		un.appendChild(l);
		un.appendChild(l1);
		un.appendChild(l2);
	}
}
function skill(skilldata) {
	var s=document.createElement("div");
	s.classList.add("sset");
	right.appendChild(s);
	var head=document.createElement("h2");
	head.textContent="Skill Set";
	head.appendChild(document.createElement("HR"));
	s.appendChild(head);
	var t=document.createElement("table");
	var tabledata="";
	for(var i = 0;i < skilldata.length;i++) {
		tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
		t.innerHTML=tabledata;
	}
	head.appendChild(t);
}
