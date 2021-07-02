var word = ["m", "a", "d", "o", "n", "n", "a"]
var display = ["_", "_", "_", "_", "_", "_", "_"]
var lag = []
var maxGuess = 20
var wins = ""
var ready = confirm("Are you ready to start?")
if (ready == true){
    while (display.includes("_") && maxGuess>0){
        var guess = prompt("Guess the letter: ")
        for (let i = 0; i<word.length; i++){
            if (guess == word[i]){
                if (lag.includes(guess)){
                    
                }else{
                    lag.push(guess)
                }
                display[i] = guess
            }
        }
        maxGuess--
        if (maxGuess>15 && maxGuess<20){
            document.getElementById('hang').src='./assets/images/2.jpg'
        }else if (maxGuess>10 && maxGuess<15){
            document.getElementById('hang').src='./assets/images/5.jpg'
        }else if (maxGuess>5 && maxGuess<10){
            document.getElementById('hang').src='./assets/images/6.jpg'
        }else if (maxGuess>0 && maxGuess<5){
            document.getElementById('hang').src='./assets/images/8.jpg'
        }else if (maxGuess == 0){
            document.getElementById('hang').src='./assets/images/10.jpg'
        }





        document.getElementById("nogr").innerHTML = maxGuess;
        document.getElementById("currentword").innerHTML = display;
        document.getElementById("lag").innerHTML = lag.sort();
    }
    if (display.includes("_")){
        wins+="lost!"
    }else{
        wins="won!"
    }
    
    document.getElementById("wins").innerHTML = wins;

}
