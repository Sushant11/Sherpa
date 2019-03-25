
$(document).ready(function(){
    window.addEventListener('scroll', () => {
        let parent = document.getElementById('parallax-container');
        let children = parent.getElementsByTagName('div');
        for(let i = 0; i < children.length; i++) {
          children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
        }
     }, false)
});
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});
$(window).scroll(function(){
  $('.info').toggleClass('infoscrolled', $(this).scrollTop() > 500);
});
$('.carousel').carousel({
  interval: 5000
})
