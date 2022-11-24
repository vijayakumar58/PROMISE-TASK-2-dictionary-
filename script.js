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
inputTag.setAttribute("id","txt");

let buttontag=document.createElement("button");
buttontag.setAttribute("type","search");
buttontag.setAttribute("id","sear");

let itag=document.createElement("i");
itag.setAttribute("class","fa fa-search");
buttontag.append(itag);

navbar.append(head);
container.append(navbar);
document.body.append(container);
division.append(inputTag,buttontag);
container.append(division);


let dictinory=new Promise((resolve, reject) => {
    let dictinoryinput=document.getElementById("sear");
    dictinoryinput.addEventListener('click',()=>{
         console.log(txt.value);
    let request=new XMLHttpRequest();
    request.open(`GET`,`https://api.dictionaryapi.dev/api/v2/entries/en/${txt.value}`);
    request.send();
    request.onload=function(){
        if(request.status==200){
            let data=JSON.parse(request.response);
            resolve(data);
        }else{
            reject("Enter the correct word");
        }
    }
 })
})
dictinory.then((res)=>{console.log(res)}).catch((rej)=>{console.log(rej)});