document.body.onload = tocDate;

function tocDate(){
    let date = new Date();
    let options = {  weekday: 'short', month: 'short', day: 'numeric' };
    let tocToday = new Intl.DateTimeFormat('en-US', options).format(date);
    let today_html = `<span class="buttonUnit_topNav dateButton_topNav class1" >${tocToday}</span>`;   

    document.getElementById('top_nav').insertAdjacentHTML('beforeend', today_html)
    //return tocToday;
}



//console.log(typeof tocDate())