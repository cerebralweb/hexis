//SIRVE compartir EN ESPAÑOL derecha arriba
const compartir_en_flex = `<h4>Compartir</h4>
<p>¿Útil para la opinión pública? Publicalo en 
<a  name="compartirEnTwitter" class="class2" href="" target="_blank"> Twitter</a>. ¿Útil los
    negocios? Difúndelo en
     <a name="compartirEnLinkedin" class="class2" href="" target="_blank"> LinkedIn</a>.
    ¿Que lo sepan tus amigos? Dale un like en 
    <a name="compartirEnFacebook" class="class2" href="" target="_blank">Facebook</a> </p>
`;
document.getElementById('compartirEnFlex').insertAdjacentHTML('afterbegin', compartir_en_flex);

// look for var twitterCard in each html page
let t = document.getElementsByName("compartirEnTwitter");
   for(let i = 0; i < t.length; i++){
      t[i].href = twitterCard;
      t[i].target= "_blank";
   }
let l = document.getElementsByName("compartirEnLinkedin");
for(let j = 0; j < l.length; j++){
   l[j].href = linkedinCard;
   l[j].target= "_blank";
}

let f = document.getElementsByName("compartirEnFacebook");
for(let k = 0; k < f.length; k++){
   f[k].href = facebookCard;
   f[k].target= "_blank";
}