//create HTML content
const miNavEs = `<div class="topnav" id="myTopnav">
<img class="logo1" src="/favicon/logoHexis1.svg">
<a href="" target="_self" id="traducir">ES</a>
<a  href="/us-home.html">Hexis</a>
<a href="/us-about.html">About</a>
<div class="dropdown">
    <button class="dropbtn">Products <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/us-technology.html">Technology</a>
        <a href="/us-consultancy.html">Consulting</a>
        <a href="/us-insights.html">Insights</a>
    </div>
</div>

<div class="dropdown">
    <button class="dropbtn">Ideas <i class="fa fa-caret-down"></i>
    </button>

    <div class="dropdown-content">
        <a href="/toc.html">Blog</a>
        <a href="/us-podcast.html">Podcast</a>
        <a href="/us-infographics.html">Infographics</a>
    </div>
</div>
<a href="/toc.html">Toc</a>

<a class="icon" onclick="responsiveIcon()">&#9776;</a>

</div>`;
//render IN a container id
document.getElementById('us-hexis-top-Nav').insertAdjacentHTML('afterbegin', miNavEs);
//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
document.getElementById('traducir').href = traducir;

function responsiveIcon() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
