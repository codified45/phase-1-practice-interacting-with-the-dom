


const init = () => {
    let secondsH1 = document.getElementById('counter'); // can't include .textContent method because then it will be a pass-by-value
    console.log(secondsH1.textContent);
    setInterval(counterFunc, 1000);
    console.log(secondsH1);


    document.getElementById('minus').addEventListener('click', decrementCounter);
    document.getElementById('plus').addEventListener('click', incrementCounter);

    // need to preventdefault on submit button. probably. 

    //functions
    function counterFunc(){
        let counterVal = parseInt(secondsH1.textContent);
        counterVal += 1;
        secondsH1.textContent = counterVal;
    };
    
    function decrementCounter(e){
        let counterVal = parseInt(secondsH1.textContent);
        counterVal -= 1;
        secondsH1.textContent = counterVal;
    };
    
    function incrementCounter(e){
        let counterVal = parseInt(secondsH1.textContent);
        counterVal += 1;
        secondsH1.textContent = counterVal;
    };

};



        // function resetCounter(){ // make  button that uses this. 
        //     secondsH1.textContent = document.querySelector('#counter').textContent;
        //     counterH1.textContent = 0;
        // };

// create an li for every like, describing the amount of likes. The likes update (live) as many times as you click it before the second is over. 



document.addEventListener('DOMContentLoaded', init);