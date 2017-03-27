var divClick = document.getElementsByClassName("modal-click");
var span = document.getElementsByClassName("close-button");

var createDivClickHandler = function(argModalName) {
  return function() { document.getElementById(argModalName).style.display = "block"; };
}

var createSpanClickHandler = function(argModalName) {
  return function() { document.getElementById(argModalName).style.display = "none"; };
}

function toggle(){

  if (window.innerWidth >= 1000) {

            //Iterate through each modal-click element for each modal
            for (var i = 0; i < divClick.length; i++) {

              var modalNumber = i + 1;
              var modalName = 'Research-Modal-' + modalNumber;

              divClick[i].onclick = createDivClickHandler(modalName);

              span[i].onclick = createSpanClickHandler(modalName);

              window.onclick = function(event) {
                if (event.target.className == "modal") {
                  event.target.style.display = "none";
                }
              };

            } //end for

          } else {

            for (var i = 0; i < divClick.length; i++) {

              var modalNumber = i + 1;
              var modalName = 'Research-Modal-' + modalNumber;

              divClick[i].onclick = createSpanClickHandler(modalName);
          }

    } //if statement

  } //toggle function

  toggle();

  window.onresize = function() { toggle(); }
