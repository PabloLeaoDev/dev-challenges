(function clock() {
    function time(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });   
    }

    

    let sec = 0;
    let timer;
    const container = document.querySelector('.timer-container');
    const temp = document.querySelector('.timer');
    
    function startClock() {
        timer = setInterval(() => {
            sec++;
            temp.innerHTML = time(sec);
        }, 1000);
    }

    container.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('startBtn')) {
            startClock();
            temp.classList.remove('paused');
        }
        if (element.classList.contains('pauseBtn')) {
            clearInterval(timer);
            temp.classList.add('paused');
        }
        if (element.classList.contains('resetBtn')) {
            clearInterval(timer);
            temp.classList.remove('paused');
            sec = 0;
            temp.innerHTML = '00:00:00';
        }
    })
})();