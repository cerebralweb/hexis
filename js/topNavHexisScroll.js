window.onscroll = function () { myTopHexisScroll() };
  
function myTopHexisScroll() {
  document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
    ? document.getElementById('contenedorHeader').style.top = '0'
    : document.getElementById('contenedorHeader').style.top = '-60px';
}