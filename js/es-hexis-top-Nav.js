//create HTML content
const miNavEs = `<div class="topnav" id="myTopnav">
<img class="logo1" src="/favicon/logoHexis1.svg">

<a href="" target="_self" id="traducir">EN</a>
<a  href="/index.html">Hexis</a>
<a href="/es-nosotros.html">Nosotros</a>
<div class="dropdown">
    <button class="dropbtn">Soluciones
     <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/es-tecnologia.html">Tecnología</a>
        <a href="/es-consultoria.html">Consultoría</a>
        <a href="/es-insights.html">Insights</a>
    </div>
</div>

<div class="dropdown">
    <button class="dropbtn">Ideas <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/es-toc.html">Blog</a>
        <a href="/es-podcast.html">Podcast</a>
        <a href="/es-infografias.html" /infografias.html">Infografías</a>
    </div>
</div>
<a href="/es-toc.html">Toc</a>

<a class="icon" onclick="responsiveIcon()">&#9776;</a>

</div>`;
//render IN a container id
document.getElementById('es-hexis-top-Nav').insertAdjacentHTML('afterbegin', miNavEs);
//this use the var translation to charge a url
document.getElementById('traducir').href = translation;

//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function responsiveIcon() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

//href="javascript:void(0);"  
