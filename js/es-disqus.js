//this function sets my var myCanonical, which is define in the head of each Hexis page

var disqus_config = function () {
  this.page.url = myCanonical; 
  this.page.identifier = myCanonical; 
};

(function () {
//note that s var is global (don's work in strict mode)
  
  var d = document;
  //I added this to put a title dynamically
  d.getElementById("comentarios").insertAdjacentHTML('afterbegin', `<h1  style="margin: 3rem 0rem;" class="titulosMainForArticles recomendadosTitulos">Comentarios</h1>`);
  //Disqus code
  s = d.createElement("script");
  s.src = "https://hexis-1.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
  
})();

/**
 * 
 * https://help.disqus.com/en/articles/1717138-why-are-the-same-comments-showing-up-on-multiple-pages 
 * https://help.disqus.com/en/articles/1717085-testing-the-api-using-the-console
 * 
 * https://disqus.com/admin/universalcode/#configuration-variables
 * */

 
