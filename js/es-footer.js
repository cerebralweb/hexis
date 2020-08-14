
//FOOTER EN ESPAÑOL
const footerEs = ` <div class="caja-child-footer">

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/es-insights.html">Insights</a></p>
<p><a class="class2" href="/es-nosotros.html">Equipo</a></p>
<p><a class="class2" href="/es-tecnologia.html">Tecnología</a></p>                        
<p><a class="class2" href="/es-consultoria.html">Consultoría</a></p>


</div>
<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="/index.html">Home</a></p>
<p><a class="class2" href="/es-toc.html">Blog</a></p>
<p><a class="class2" href="/es-podcast.html">Podcast</a></p>            
<p><a class="class2" href="/es-infografias.html">Infografías</a></p>

</div>

<div class="caja-child-footer contenedor-site-map">

<p><a class="class2" href="https://twitter.com/HexisToc">Twitter</a></p>
<p><a class="class2" href="https://www.linkedin.com/company/hexis-research-consulting/">LinkedIn</a></p>            
<p><a class="class2" href="https://www.instagram.com/hexistoc/">Instagram</a></p>            
<p><a class="class2" href="https://www.facebook.com/HexisResearch">Facebook</a></p>

</div>

<div class="caja-child-footer">
<address class="contenedorAdress">    
    <p>Bogotá</p>
    <p>110221</p>            
    <p><a class="class2" href="skype:paulocleon1?call"><span itemprop="availableChannel"> Hablar por Skype</span></a> </p>
    <p><span itemprop="availableChannel"> Teléfono (+57 1) 465 5570 </span> </p>
</address>
</div>`
document.getElementById("es-footer").insertAdjacentHTML('afterbegin', footerEs);

//COPY RIGHTS
document.getElementById("copyRights").textContent = "Hexis© 2020";

//LANGUAGE BUTTON SPANISH TO ENGLISH
document.getElementById("translate").href = translation;



//TIRAS DE CONTENIDO EN ESPAÑOL











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