// let current = new Date()
const audio = new Audio("Azaan.mp3")
let playAudio=true;





function eventListener() {
    const card = $(".card")[0]
    const cardButton = $(".closingButton")[0];
    const sound = $(".soundBar")[0]

    //we pause the audio and catch the 
    sound.addEventListener("click", function () {
        playAudio=playAudio? false:true;

        if(playAudio==true){
            audio.play()
            this.innerHTML = "<i class='fa-solid fa-play'></i>"
        }
        else{
            audio.pause()
            this.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
        }
    
       
    })
    card.addEventListener("click", function () {
        this.classList.toggle("hide")
    })
   
}

function getPrayerTimesAPI() {
    $(document).ready(function () {
        $.get('https://www.londonprayertimes.com/api/times/?format=json&key=2a99f189-6e3b-4015-8fb8-ff277642561d&24hours=true',
            function (data, err) {

                $('.Day').html(data.date);
                $('.Fajr').html(data.fajr);
                $('.Location').html(data.city);
                // $('#fajr-jamat').html(data.fajr_jamat);
                // $('#sunrise').html(data.sunrise);
                $('.Zuhr').html(data.dhuhr);
                // $('#dhur-jamat').html(data.dhuhr_jamat);
                $('.Asr').html(data.asr);
                // $('#asar-jamat').html(data.asr_jamat);
                $('.Magrib').html(data.magrib);
                // $('#magrib-jamat').html(data.magrib_jamat);
                $('.Isha').html(data.isha);
                // $('#isha-jamat').html(data.isha_jamat);
            })
    })

}

function setCurrentTime() {
    let currentH = $(".Hour")[0];
    let currentM = $(".Minute")[0];
    let currentS = $(".Second")[0];
    setInterval(function () {
        let current = new Date()
        currentH.innerHTML = current.getHours()
        currentM.innerHTML = current.getMinutes()
        currentS.innerHTML = current.getSeconds()
        checkPrayerTime($(".Fajr")[0], current)
        checkPrayerTime($(".Zuhr")[0], current)
        checkPrayerTime($(".Asr")[0], current)
        checkPrayerTime($(".Magrib")[0], current)
        checkPrayerTime($(".Isha")[0], current)

    }, 1000)
}

function checkPrayerTime(Prayer, currentTime) {
    
    const sound = $(".soundBar")[0]
    const card = $(".card")[0]
    let Prayerhour = parseInt(Prayer.innerHTML.split("")[0] += Prayer.innerHTML.split("")[1])
    let PrayerMinute = parseInt(Prayer.innerHTML.split("")[3] += Prayer.innerHTML.split("")[4])
    let PrayerSeconds = 0;

    if (Prayerhour == currentTime.getHours() && PrayerMinute == currentTime.getMinutes() && PrayerSeconds == currentTime.getSeconds()) {
        setTimeout(function () {
            console.log("it is :" + Prayer.getAttribute("class"))
            audio.play()
            sound.innerHTML = "<i class='fa-solid fa-play'></i>"
        }, 0.1)

        setTimeout(function () {
            sound.innerHTML = ""

        }, 100000)

    }
}

function testAzaan(setHour, setMinute, setSeconds) {
    let speed = setSeconds;
    current.setHours(setHour)
    current.setMinutes(setMinute)
    current.setSeconds(speed)
    setInterval(function () {
        speed++;
        current.setSeconds(speed)
        if (speed >= 60) {
            speed = 0;
        }

    }, 1000)

}


getPrayerTimesAPI()
setCurrentTime()
// testAzaan(16, 52, 58);
eventListener()
