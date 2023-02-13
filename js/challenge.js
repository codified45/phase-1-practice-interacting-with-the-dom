
const likedNumbersArray = [];
let secondsH1 = document.getElementById('counter'); // can't include .textContent method because then it will be a pass-by-value

const init = () => {
    
    console.log(secondsH1.textContent);
    let myIntervalId = setInterval(counterFunc, 1000);
    console.log(secondsH1);
    // const likedNumbersArray = [];


    document.getElementById('minus').addEventListener('click', decrementCounter);
    document.getElementById('plus').addEventListener('click', incrementCounter);
    document.getElementById('heart').addEventListener('click', heartEventHandler);
    document.getElementById('pause').addEventListener('click', pauseEventHandler);
    document.getElementById('comment-form').addEventListener('submit', addCommentHandler);


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

    function heartEventHandler(e){
        const likesContainer = document.getElementById('likeListContainer');
        if (likedNumbersArray.includes(parseInt(secondsH1.textContent))){
            let likedNumber = likedNumbersArray.find(() => parseInt(secondsH1.textContent));
            console.log(likedNumber);
            let likedNumberElement = document.querySelector(`[data-num="${likedNumber}"]`);
            let currentLikes = parseInt(likedNumberElement.firstElementChild.textContent);
            currentLikes += 1;
            likedNumberElement.innerHTML = ` ${likedNumber} has been liked <span>${currentLikes}</span> times`;
        } else { let newLi = document.createElement('li');
        newLi.dataset.num = parseInt(secondsH1.textContent);
        newLi.innerHTML = ` ${secondsH1.textContent} has been liked <span>1</span> time`;
        likedNumbersArray.push(newLi.dataset.num);
        console.log(newLi.dataset.num);
        likesContainer.appendChild(newLi);
        };
    };

    // button.addEventListener("click", () => {
    //     const modalId = button.dataset.modalId
    //     const modal = document.getElementById(modalId)
    //     modal.classList.add("show")
    //   })


    function pauseEventHandler(e){

    };

    function addCommentHandler(e){ //complete
        e.preventDefault();
        const input = document.querySelector('#comment-input');
        console.log(input.value);
        const p = document.createElement('p');
        p.textContent = input.value;
        const form = document.querySelector('#comment-form');
        document.querySelector('#list').appendChild(p);
        form.reset();
    };

};


        // function resetCounter(){ // make  button that uses this. 
        //     secondsH1.textContent = document.querySelector('#counter').textContent;
        //     counterH1.textContent = 0;
        // };

// create an li for every like, describing the amount of likes. The likes update (live) as many times as you click it before the second is over. 



document.addEventListener('DOMContentLoaded', init);