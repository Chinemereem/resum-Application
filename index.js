var mybutton = document.getElementById("myBtnid");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var imgs = [
    "images/netflix clone.jpg",
    "images/css-tricks.jpg",
    "images/A Personal Portfolioimg.jpg",
    "images/A Survey Formimg.jpg"
           ];


var container = document.getElementById("image-el");
for (var i = 0, j = imgs.length; i < j; i++){
   var img = document.createElement('img');
   img.src = imgs[i]
   container.appendChild(img);
}




   function myFunction() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");
   
     if (dots.style.display === "none") {
       dots.style.display = "inline";
       btnText.innerHTML = "Read more"; 
       moreText.style.display = "none";
     } else {
       dots.style.display = "none";
       btnText.innerHTML = "Viewless"; 
       moreText.style.display = "inline";
     }
   }