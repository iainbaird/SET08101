
     function display(x) {
	    var off = document.getElementById("off");
        var nav = document.getElementById("nav");
        var sci = document.getElementById("sci");
		var weps = document.getElementById("weps");
		
        switch (x) {
		  case "off":
		    off.style.display = "block";
            nav.style.display = "none";
            sci.style.display = "none";
			weps.style.display = "none";
		  break;
          case "nav":
            off.style.display = "none";
            nav.style.display = "block";
            sci.style.display = "none";
			weps.style.display = "none";
          break;
          case "sci":
            off.style.display = "none";
            nav.style.display = "none";
            sci.style.display = "block";
			weps.style.display = "none";
            break;		
		  case "weps":
            off.style.display = "none";
            nav.style.display = "none";
            sci.style.display = "none";
			weps.style.display = "block";
            break;
        }
      }
	  
	  
	  
var x = document.getElementById("myAudio"); 


  
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  x.play();
  setTimeout(function(){  
  modal.style.display = "block"; }, 2000)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

