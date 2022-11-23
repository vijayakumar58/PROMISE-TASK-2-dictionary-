let container=document.createElement("div");
 container.setAttribute("class","container");

let navbar=document.createElement("nav");
navbar.setAttribute("class","navbar navbar-dark bg-primary");

let head=document.createElement("h1");
head.innerHTML="DICTINORY";

let division=document.createElement("div");
division.setAttribute("class","example")

let inputTag=document.createElement("input");
inputTag.setAttribute("type","text");
inputTag.setAttribute("placeholder","Search");

let buttontag=document.createElement("button");
buttontag.setAttribute("type","submit");

let itag=document.createElement("i");
itag.setAttribute("class","fa fa-search");
buttontag.append(itag);

navbar.append(head);
container.append(navbar);
document.body.append(container);
division.append(inputTag,buttontag);
container.append(division);


