const compartir_en_flex = `<h4> Share </h4>
<p> Useful for public opinion? Post it to <a name="twitter-share" class = "class2"
        href = ""> Twitter </a>. Useful the
     business? Spread it in <a name="linkedIn-share" class = "class2"
        href = ""> LinkedIn </a>.
     Let your friends know? Like it on <a name="facebook-share" class = "class2"
        href = ""> Facebook </a> </p>
<p> <a class="class2" href="#insight"> Summary </a> </p>`;
document.getElementById('us-shareInFlex').insertAdjacentHTML('afterbegin', compartir_en_flex);




let t = document.getElementsByName("twitter-share");

for(let i= 0; i < t.length; i++){
   t[i].href = twitterCard;
   t[i].target= "_blank";
}

let l = document.getElementsByName("linkedIn-share");
for(let j = 0; j < l.length; j++){
   l[j].href = linkedinCard;
   l[j].target= "_blank";
}

let f = document.getElementsByName("facebook-share");
for(let k = 0; k < f.length; k++){
   f[k].href = facebookCard;
   f[k].target= "_blank";
}






