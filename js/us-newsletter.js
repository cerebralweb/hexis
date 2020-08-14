//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Newsletter</h4>
            
<p>Every two weeks, the Toc editorial team curates a list of the best content on online consumption, 
produced by Bloomberg, The Economist, YPulse, WARC and, of course, Hexis-Toc. Subscribe and receive it. </p>
<form name="contact" method="POST" netlify>            
    <p><input type="email" name="email" placeholder="email"     
               />
    </p>            
    <p> <button name="button" type="submit">Hello Toc</button></p>
</form>
`;
document.getElementById('us-newsletter').insertAdjacentHTML('afterbegin', newsletter_es);
//problem ? in the regex: an escaped dot (just erase the regex)

//pattern="[a-zA-Z0-9.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"