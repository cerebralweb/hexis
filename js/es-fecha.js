document.body.onload = tocDate;

function tocDate(){
    let date = new Date();
    let options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
    let tocToday = new Intl.DateTimeFormat('es', options).format(date);
    let today_html = `<span class="buttonUnit_topNav dateButton_topNav class1" >${tocToday}</span>`;   

    document.getElementById('es_top_nav').insertAdjacentHTML('beforeend', today_html)
    //return tocToday;
}



//console.log( tocDate())

