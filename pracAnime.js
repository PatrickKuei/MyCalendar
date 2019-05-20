var slideIndex = 1;

showSlides();

function plusSlide(n){
showSlides( slideIndex += n );
}

function currentSlide(n){
showSlides( slideIndex=n );
}

function showSlides() {
var i;
var slides = document.getElementsByClassName("niceImg");
var dots = document.getElementsByClassName("dot");
if (slideIndex > slides.length){
slideIndex=1
}
if (slideIndex < 1) {
slideIndex= slides.length
}
for (i= 0 ; i < slides.length ; i++){
slides[i].style.display = "none";
}
for (i= 0; i < dots.length; i++){
dots[i].className = dots[i].className.replace("active", "");
}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";

console.log(slideIndex);
}

var acc = document.getElementsByClassName("accordion");

for(var i = 0; i < acc.length; i++){
acc[i].addEventListener("click", function(){
this.classList.toggle("activeBtn");
var panel = this.nextElementSibling;
if(panel.style.maxHeight){
panel.style.maxHeight = null;
}else{
panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

function SetCwinHeight(){
var iframeid=document.getElementById("mainframe"); //iframe id
if (document.getElementById){
if (iframeid && !window.opera) {
if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
iframeid.height = iframeid.contentDocument.body.offsetHeight;
}
else if(iframeid.Document && iframeid.Document.body.scrollHeight) {
iframeid.height = iframeid.Document.body.scrollHeight;
}
}
}
};

function cleanLS(){
localStorage.clear();
location.reload();
}