//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Newsletter</h4>
            
<p>Quincenalmente, el equipo editorial de Toc cura una lista con los mejores contenidos sobre
    el consumo online, producidos por Bloomberg, The Economist, YPulse, WARC y Hexis-Toc.
    Suscríbete y recíbela </p>
    
<form 
    name="contact" 
    method="POST"
    action="/success"    
    netlify-honeypot="bot-field"
    data-netlify="true"
    >
  
  <input type="hidden" name="form-name" value="contact">  
  
  <p>
  <label for="email">Tu correo:
    <input 
    name="email" 
    type="email" 
    required
    title="...pon un correo válido :) "
    pattern="[a-zA-Z0-9_.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"
    >
  </label>
  </p>
 
  <p>
    <button type="submit">Enviar</button>
  </p>
</form>

`
document.getElementById('es-newsletter').insertAdjacentHTML('afterbegin', newsletter_es);
//problem ? in the regex: an escaped dot (just erase the regex)
//pattern="[a-zA-Z0-9_.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"