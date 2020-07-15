/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/*let sections = ["landing-section", "work-section", "contact-section"];
var counter = 0;

onScrolling();
function onScrolling() {
    var previous = window.scrollY;
        window.addEventListener('scroll', function handler(e) {
            e.currentTarget.removeEventListener(e.type, handler);
            var direction = null;
            if(window.scrollY > previous) {
                direction = "down";
                if(counter < sections.length) {
                    counter+=1;
                }
                
            } else {
                direction = "up";
                if(counter > 0) {
                    counter-=1;
                } else {
                    counter = 0;
                }


            }
            previous = window.scrollY;
            console.log(direction);
            document.getElementById(sections[counter]).scrollIntoView();
            
            onScrolling();
    });
}*/
