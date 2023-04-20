

let header=document.querySelector(".CityName").innerHTML



jQuery(function($) {
    $.getJSON('https://muslimsalat.com/'+header+'/daily.json?key=API_KEY&jsoncallback=?', function (times)
    {
        $(".Day").html(times.items[0].date_for)
        $(".Location").html(times.query)
        $(".Fajr").html(times.items[0].fajr)
        $(".Zuhr").html(times.items[0].dhuhr)
        $(".Asr").html(times.items[0].asr)
        $(".Magrib").html(times.items[0].maghrib)
        $(".Isha").html(times.items[0].isha)
        console.log(times)

        
    });
});

function setCurrentTime() {
    let currentH = $(".Hour")[0];
    let currentM = $(".Minute")[0];
    let currentS = $(".Second")[0];
    setInterval(function () {
        let current = new Date()
        currentH.innerHTML = current.getHours()
        currentM.innerHTML = current.getMinutes()
        currentS.innerHTML = current.getSeconds()
   

    }, 1000)
}
