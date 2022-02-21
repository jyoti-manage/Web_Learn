function w3_open() {
  console.log("Js loaded");
    document.getElementById("mySidebar").style.display="flex";
    
    document.getElementById("w3-hide").style.display='none';
    document.getElementById("mySidebar").style.height='5600px';

    
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("w3-hide").style.display='block';
  
    
  }

  