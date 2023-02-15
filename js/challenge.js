document.addEventListener("DOMContentLoaded", () => {

    //Create variable for counter
    let count = document.getElementById("counter");

    //Create interval functionality
    let intervalID = null;
    function intervalManager(flag) {
        if(flag){
            intervalID = setInterval(() => count.innerText++, 1000);
        }
        else{
            clearInterval(intervalID);
        }
    }

    //Invoke interval to start
    intervalManager(true)
    
    //Create Variables for pre-existing buttons
    let addButton = document.getElementById("plus")
    let subButton = document.getElementById("minus")
    let likeButton = document.getElementById("heart")
    let pauseButton = document.getElementById("pause")

    //Create variable for comment form
    let commentForm = document.querySelector("form")

    //Create restart button and append it to DOM
    let restartButton = document.createElement("button")
    restartButton.innerText = "restart"
    let body = document.querySelector("body")
    body.children[5].insertAdjacentElement("afterend", restartButton)
    
    //Add Events for buttons
    addButton.addEventListener('click', () => count.innerText++);
    subButton.addEventListener('click', () => count.innerText--);
    likeButton.addEventListener('click', displayLikes);
    pauseButton.addEventListener('click', pauseFunctionality);
    restartButton.addEventListener('click', restartFunctionality);

    //Add events for form
    commentForm.addEventListener('submit', commentFunctionality)
    
    //Callback Functions for button events

    function displayLikes(event){
        let whereToPutLikes = document.querySelector('.likes');
        let likesList = whereToPutLikes.getElementsByTagName("li");
        let i = parseInt(count.innerText)

        if(likesList[i] === undefined)
        {
            let newLine = document.createElement("li");
            newLine.innerText = `${count.innerText} has been liked 1 time.`;
            whereToPutLikes.appendChild(newLine)
        }
        else 
        {
            console.log(likesList[i])
            const stringArray = likesList[i].innerText.split(" ")
            let likesAmount = parseInt(stringArray[4]) + 1
            likesList[i].innerText = `${i} has been liked ${likesAmount} times.`
            
        }
    }
       
    function pauseFunctionality(event){
        if(pauseButton.innerText === "pause")
        {
             addButton.disabled = true;
             subButton.disabled = true;
             likeButton.disabled = true;
             pauseButton.innerText = "resume";
             intervalManager(false);
        } else {
            addButton.disabled = false;
            subButton.disabled = false;
            likeButton.disabled = false;
            pauseButton.innerText = "pause";
            intervalManager(true);
        }
    }

    function restartFunctionality(event){
        addButton.disabled = false;
        subButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = "pause";
        intervalManager(false)
        intervalManager(true)
        count.innerText = "0"
    }

    function commentFunctionality(event){
        event.preventDefault()
        let p = document.createElement("p")
        p.textContent = event.target.comment.value
        console.log(p)
        let placeToPutComments = document.querySelector("h3")
        placeToPutComments.appendChild(p)

    }
})