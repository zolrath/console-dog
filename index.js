(function(console) {
    "use strict";
    if (!console) return;
    var doge = "░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░\n ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░\n ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░\n ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░\n ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░\n ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░ \n ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░\n ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░\n ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░\n ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░\n ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░\n ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌\n ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░\n ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░\n ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░\n ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░\n ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░\n ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░\n ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░";
    var wow = ['', 'wow!', 'amaze', 'excite'];
    var such = ['so', 'such', 'many', 'much', 'very', 'good'];
    var thing = ['log', 'console', 'debug', 'errorz', 'bugs'];


    function random(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function random_saying() {
        return random(wow) + ' ' + random(such) + ' ' + random(thing);
    }

    if (!console.dog) {
        console.dog = function() {
            console.log(random_saying());
            console.log.apply(console, arguments);
            console.log(doge);
        };
    }
})(this.console);
