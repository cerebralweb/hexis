let comenCarne = [[[true, 76],[false, 24]]];

window.onload = function (){
    Flotr.draw(
        document.getElementById("chart1"),
        comenCarne, 
        {
            bars: {
                show:true
            }
        }
    );
};