
// send message from js
(function(){
   emailjs.init("SLU7axNetQo_WJo-3");
})();
function sendmessage(event){
   event.preventDefault();
   const prons={
       name:document.getElementById("name").value,
       number:document.getElementById("number").value,
      message:document.getElementById("message").value,
      time: new Date().toLocaleString(), 
   }
   emailjs.send("service_t6lmqsj","template_xyc2bcg",prons).then(()=>{
      alert("message sent sussfuly");
      document.getElementById("contactform").reset();
   }).catch(error=>{
      console.error("EmailJS Error:", error);
      alert("Error: " + JSON.stringify(error));

   });
}