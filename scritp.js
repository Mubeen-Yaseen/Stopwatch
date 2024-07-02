let [seconds, minutes, hours] = [0, 0, 0];
        let displayname = document.getElementsByClassName("display")[0];
        let timer;

        function Stpwatch() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                };
            };
            displayname.innerHTML=formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        };

         function formatTime(time) {
            return time < 10 ? "0" + time : time;
        }

        function watchstart() {
            timer = setInterval(Stpwatch, 1000);
        };

        function watchstop() {
            clearInterval(timer);
        };

        function watchrest() {
            clearInterval(timer);
            displayname.innerHTML = "00:00:00";
        };