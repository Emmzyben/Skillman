
function myFunction(x) {
    x.classList.toggle("change");
  }

  var open = false;

function openNav() {
    var sideNav = document.getElementById("mySidenav");
    
    if (sideNav.style.width === "0px" || sideNav.style.width === "") {
        sideNav.style.width = "250px";
        open = true;
    } else {
        sideNav.style.width = "0";
        open = false;
    }
}

  
function toggleHeight3() {
  var writeUpsDiv = document.getElementById('droping');
  var currentHeight = writeUpsDiv.offsetHeight;

  if (currentHeight === 0 ) {
    writeUpsDiv.style.height = 'auto'; 
   document.getElementById("inner").innerText="-";
  } else {
    writeUpsDiv.style.height = '0px'; 
    document.getElementById("inner").innerText="+";
  }
}

function toggleHeight4() {
  var writeUpsDiv = document.getElementById('droping1');
  var currentHeight = writeUpsDiv.offsetHeight;

  if (currentHeight === 0 ) {
    writeUpsDiv.style.height = 'auto'; 
   document.getElementById("inner").innerText="-";
  } else {
    writeUpsDiv.style.height = '0px'; 
    document.getElementById("inner").innerText="+";
  }
}


 


  document.addEventListener('DOMContentLoaded', function () {
    var secondDiv = document.getElementById('secondDiv');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Check if the user has scrolled down a certain amount (adjust as needed)
        if (window.scrollY > 250) {
            // Slide down the sticky div by changing the 'top' property
            secondDiv.style.top = '0';
        } else {
            // Move the sticky div back above the viewport when scrolling up
            secondDiv.style.top = '-100px';
        }
    });
});





