document.body.onload = firstBodyElem;

//this is hidden, it is for special announcements
function firstBodyElem(){
    let firstElem = document.createElement('div');
    firstElem.insertAdjacentHTML('afterbegin', '<p>Hello Ad</p>')
    firstElem.insertAdjacentHTML('afterbegin', '<span id="close"> &times;</ </span>');
    firstElem.className = 'beforeBody';
    document.body.before(firstElem);    
    
    document.getElementById('close').addEventListener("click", function(){
        this.parentElement.style.display = 'none';
    })



}


