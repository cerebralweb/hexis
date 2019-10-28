window.onscroll = function () { myTopHexisScroll() };
  
function myTopHexisScroll() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? document.getElementById('contenedorHeader').style.top = '0'
    : document.getElementById('contenedorHeader').style.top = '-60px';
}