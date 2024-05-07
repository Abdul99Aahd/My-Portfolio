const playButton = document.getElementsByClassName("play")[0];
        const lapButton = document.getElementsByClassName("lap")[0];
        const resetButton = document.getElementsByClassName("reset")[0];
        const second = document.getElementsByClassName("sec")[0];
        const centisecond = document.getElementsByClassName("msec")[0];


        let isplay = false;
        let secCounter = 0;
        let sec;
        let centiCounter = 0;
        let centiSec;

        const toggleButton = () => {
            lapButton.classList.remove("hidden")
            resetButton.classList.remove("hidden")
        }

        const play = () => {
            if (!isplay) {
                playButton.innerHTML = "Pause";
                sec = setInterval(() => {
                    second.innerHTML = `${secCounter++} : ` ;
                }, 1000)
                centiSec = setInterval(() => {
                    centisecond.innerHTML = `${centiCounter++} : ` ;
                }, 10)
                isplay = true;
            } else {
                playButton.innerHTML = "Play";
                clearInterval(sec)
                clearInterval(centiSec)
                isplay = false;
            }
            toggleButton();
        }



        const reset = () => {
            play();
            lapButton.classList.add("hidden")
            resetButton.classList.add("hidden")
            second.innerHTML = "0 :" 
        }
        playButton.addEventListener("click", play);
        resetButton.addEventListener("click", reset);