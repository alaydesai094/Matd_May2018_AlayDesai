document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Media);
}
 


document.getElementById("dj").addEventListener("click",playSounddj);
  document.getElementById("kl").addEventListener("click",playSoundkl);

 
 function playSounddj() {
	 	alert("buttom pressed");
         document.getElementById('djsound').play();
      }
 
 function playSoundkl() {
	 	alert("buttom pressed");
         document.getElementById('klsound').play();
      }