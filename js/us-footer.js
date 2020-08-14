

const us_footer = ` <div class="caja-child-footer">

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/us-insights.html">Insights</a></p>
<p><a class="class2" href="/us-about.html">About us</a></p>
<p><a class="class2" href="/us-technology.html">Technology</a></p>                        
<p><a class="class2" href="/us-consultancy.html">Consulting</a></p>


</div>
<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/us-home.html">Home</a></p>
<p><a class="class2" href="/toc.html">Blog</a></p>
<p><a class="class2" href="/us-podcast.html">Podcast</a></p>            
<p><a class="class2" href="/us-infographics.html">Infographics</a></p>

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="https://twitter.com/hexisresearch">Twitter</a></p>
<p><a class="class2" href="https://www.linkedin.com/company/hexis-research-consulting/">LinkedIn</a></p>            
<p><a class="class2" href="https://www.instagram.com/hexistoc/">Instagram</a></p>            
<p><a class="class2" href="https://www.facebook.com/HexisResearch">Facebook-Es</a></p>

</div>

<div class="caja-child-footer">
<address class="contenedorAdress">    
    <p>Bogotá</p>
    <p>110221</p>            
    <p><a class="class2" href="skype:paulocleon1?call"><span itemprop="availableChannel"> Talk in Skype</span></a> </p>
    <p><span itemprop="availableChannel"> Teléfono (+57 1) 465 5570 </span> </p>
</address>
</div>`
document.getElementById("us-footer").insertAdjacentHTML('afterbegin', us_footer);

//COPY RIGHTS
document.getElementById("copyRights").textContent = "Hexis© 2020";




/**
 * 
//RENDERS TOP NAV 

//creates a container in the HTML elem with that tag id
var navHull = document.createElement('contenedorParaTopNavScript');
//creates content to be rendered in the container
var miNavEs
 = `<div class="topnav" id="myTopnav">`;
//put the content into container using innerHTML prop
navHull.innerHTML = miNavEs
;
//appends into body
document.body.prepend(navHull);
 */