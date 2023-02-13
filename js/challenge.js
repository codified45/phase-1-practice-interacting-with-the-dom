
const likedNumbersArray = [];
let secondsH1 = document.getElementById('counter'); // can't include .textContent method because then it will be a pass-by-value
let pausableBtns = document.getElementsByClassName('pausable');

const init = () => {
    
    console.log(secondsH1.textContent);
    let myIntervalId = setInterval(counterFunc, 1000);
    console.log(secondsH1);

    document.getElementById('minus').addEventListener('click', decrementCounter);
    document.getElementById('plus').addEventListener('click', incrementCounter);
    document.getElementById('heart').addEventListener('click', heartEventHandler);
    document.getElementById('pause').addEventListener('click', pauseEventHandler);
    document.getElementById('restart').addEventListener('click', restartEventHandler);
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

    function heartEventHandler(e){ // probably done. 
        const likesContainer = document.getElementById('likeListContainer');
        if (likedNumbersArray.includes(parseInt(secondsH1.textContent))){
            console.log('Im in the if');
            let likedNumber = parseInt(secondsH1.textContent);
            console.log(likedNumber);
            let likedNumberElement = document.querySelector(`[data-num="${likedNumber}"]`);
            let currentLikes = parseInt(likedNumberElement.firstElementChild.textContent);
            console.log(currentLikes);
            currentLikes += 1;
            likedNumberElement.innerHTML = ` ${likedNumber} has been liked <span>${currentLikes}</span> times`;
        } else { 
            console.log('Im in the else');
            let newLi = document.createElement('li');
        newLi.dataset.num = parseInt(secondsH1.textContent);
        newLi.innerHTML = ` ${secondsH1.textContent} has been liked <span>1</span> time`;
        likedNumbersArray.push(parseInt(newLi.dataset.num));  // this pushed a string instead of integer, even though I parsed it above before assigning. this is where my error was.  
        console.log(likedNumbersArray);
        console.log(newLi.dataset.num);
        likesContainer.appendChild(newLi);
        };
    };

    function pauseEventHandler(e){ //done.
        if (e.target.textContent === " pause ") {
            clearInterval(myIntervalId);
            console.log(pausableBtns);
            e.target.textContent = " resume ";
            for (const button of pausableBtns) {
                button.disabled = true;
            };
        } else {
            e.target.textContent = " pause ";
            myIntervalId = setInterval(counterFunc, 1000);
            for (const button of pausableBtns) {
                button.disabled = false;
            };
        };
    };

    function restartEventHandler(){
        let heart = document.getElementById('heart');
        let pauseBtn = document.getElementById('pause');
        if (heart.disabled === true) {
            pauseBtn.textContent = " pause "
            for (const button of pausableBtns) {
                button.disabled = false;
            };
        };
        secondsH1.textContent = 0;
        clearInterval(myIntervalId);
        myIntervalId = setInterval(counterFunc, 1000);
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

document.addEventListener('DOMContentLoaded', init);


/*
                *** User Stories ***
• See the timer increment every second once the page has loaded. (done)
• Manually increment and decrement the counter using the plus and minus buttons. (done)
• "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed. (done)
• Pause the counter, which should:
	• pause the counter (done)
	• disable all buttons except the pause and restart buttons (done)
	• switch the label on the button from "pause" to "resume" (done)
• Click the "restart" button to restart the counter and re-enable the buttons. (done)
• Click the "resume" button and resume the counter, and re-enable the buttons. (done)
• Leave comments on my gameplay, such as: "Wow, what a fun game this is." (done)

*/