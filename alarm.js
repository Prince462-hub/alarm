let hr = document.getElementById('hours')
let min = document.getElementById('minutes')
let ampm = document.getElementById('ampm')
for (let i = 0; i < 13; i++) {
    hr.insertAdjacentHTML('beforeend', `<option value=${i}>${i}</option>`)
}
for (let i = 0; i < 60; i++) {
    min.insertAdjacentHTML('beforeend', `<option value=${i}>${i}</option>`)
}
let set = document.getElementById('set')
let snooze = document.getElementById('snooze')
let stop = document.getElementById('stop')
function playMusic() {
    const myaudio = new Audio('ringtone.mpeg')
    myaudio.play()
    function pauseMusic() {
        myaudio.pause()
    }
    function snoozeAlarm(){
        myaudio.pause()
        setTimeout(()=>{
            myaudio.play()
        },10000)
    }
    stop.addEventListener('click', () => {
        pauseMusic()
    })
    snooze.addEventListener('click',()=>{
        snoozeAlarm()
    })
}
set.addEventListener('click', () => {
    let b = setInterval(currentDate, 1000)
    function currentDate() {
        let date = new Date
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let ampm1 = 'AM'
        if (hours >= 12) {
            ampm1 = 'PM'
            if (hours > 12) {
                hours = hours - 12
            }
        }
        let a = hr.value == hours && min.value == minutes && ampm.value == ampm1
        // console.log(a)
        if (a == true) {
            // console.log('done')
            playMusic()
            clearInterval(b)
        }
    }
})
