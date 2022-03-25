const timerBlock = document.querySelectorAll('.timer__count')

console.log(timerBlock)

const deadline = '31 march 2022'

let interval

const updateClock = () => {
    const date = new Date ().getTime()
    const dateDeadline = new Date (deadline).getTime()
    const timeRemeining = (dateDeadline - date)/1000

    const hours = Math.floor((timeRemeining/60/60)%24);
    const days = Math.floor((timeRemeining/60/60/24));
    const minutes = Math.floor((timeRemeining/60)%60);
    const seconds = Math.floor((timeRemeining)%60);

    const timerItems = [days, hours, minutes, seconds]

    timerBlock.forEach ((time, index) => {
        time.textContent = timerItems[index]
    })
}

interval = setInterval(updateClock,500)
