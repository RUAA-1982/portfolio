let myalertposition= document.querySelector(".header");

let myname= document.getElementById("name");
let myemail= document.getElementById("email");
 let mymessage= document.getElementById("message");
 let myform= document.getElementById("registerform");
 
 let myclose='';
 let myblock='';

  function sendMail() {
cheker();

 let myreslt=allLetter(myname);
 let myresultemail=letteremail(myemail);
 
 
if((myreslt===true)&&(myresultemail=== true)){
  var params = {
    name: myname.value,
    email: myemail.value,
    message: mymessage.value,
  };
 
    const serviceID = "service_kgyqayd";
    const templateID = "template_5ooqrch";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
  
          makemessagecoorect();
         
  
  
      })
      
        .catch(err=>console.log(err));
}
else{
  makemessageerror()
}


  }
   
  
 
  function cheker(){
    myform.addEventListener('submit',(e)=>{
      e.preventDefault();
    
    })
  }

  



/**********************user name**************************** */
  function allLetter(mytext)
  {
   var letter1 = /^[A-Za-z\s]*$/;
   
   

   if(mytext.value.match(letter1))
     {
      return true
     }
   else
     {
      
     return false;
     }
  }
  /******************************************************************* */

  /****************************************************************** */
function letteremail(myemail){
  var letteremail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   

   if(myemail.value.match(letteremail))
     {
      return true
     }
   else
     {
   
     return false;
     }

  
}

  /****************************************************************** */
  
  function  makemessageerror() {
   myblock =document.createElement("div");
    myblock.className="myalert";
    let mypar= document.createElement("p");
    let mytext= document.createTextNode("votre information n'est pas correct");
    mypar.appendChild(mytext);
    myblock.appendChild(mypar);
    myclose= document.createElement("span");
    myclose.className="close-button";
    let textclose= myclose.innerHTML="CLOSE";
    myblock.appendChild(myclose);
    myalertposition.appendChild(myblock);
   
    

  }
 
/************************************************************************ */
function  makemessagecoorect() {
  myblock =document.createElement("div");
   myblock.className="myalert";
   let mypar= document.createElement("p");
   let mytext= document.createTextNode(" votre message étais envoyé");
   mypar.appendChild(mytext);
   myblock.appendChild(mypar);
   myclose= document.createElement("span");
   myclose.className="close-button";
   let textclose= myclose.innerHTML="CLOSE";
   myblock.appendChild(myclose);
   myalertposition.appendChild(myblock);
  
   

 }
/************************************************************************* */


 document.addEventListener("click",(e)=>{
  if(e.target.className=="close-button")
  document.querySelector(".myalert").remove();
 })
 /********************************************************************************************* */
 
   
   
  

 
  
 
 
 
   
   
    
   

   
      
   
    
   
     
    
    


  
  /********************************************** */
  myname.onfocus=function(){
    this.setAttribute("placeholder","")
 
 }
 myemail.onfocus=function(){
     this.setAttribute("placeholder","")
 }
  mymessage.onfocus=function(){
     this.setAttribute("placeholder","")
  }
   
 
  myname.onblur=function(){
     this.setAttribute("placeholder","votre nom");
   
    
  }
  myemail.onblur=function(){
     this.setAttribute("placeholder","votre email");
   
    
  }
  mymessage.onblur=function(){
     this.setAttribute("placeholder","votre message");
   
    
  }
   let myfunctioncheker =myname.oninput=function(){
    if(this.value== Text){
      return true;

    }
    else
     return false;
  }


  /****************************************************** */
 document.addEventListener('contextmenu', event => event.preventDefault());

 