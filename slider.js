//https://github.com/aoikisan/simple_image_slider
$(document).ready(function() {
  var slideIndex = 1;
  showSlide(slideIndex);
  
  $(".slider-prev").click(function() {
    showSlide(slideIndex -= 1);
  });
  
  $(".slider-next").click(function() {
    showSlide(slideIndex += 1);
  });
  
  setInterval(function() {
	    showSlide(slideIndex += 1);
	  }, 5000);
  
  function showSlide(n) {
    var i;
    var slides = $(".slider-images img");
    var texts = $(".slider-text");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
    
    texts.html("<h2>" + slides[slideIndex-1].alt + "</h2>");
  }
});
