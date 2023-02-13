document.addEventListener("DOMContentLoaded", () => {

    //Create variable for counter
    let count = document.getElementById("counter");

    //Create interval functionality
    let intervalID = null;
    function intervalManager(flag) {
        if(flag){
            intervalID = setInterval(() => count.innerText++, 5000);
        }
        else{
            clearInterval(intervalID);
        }
    }

    //Invoke interval to start
    intervalManager(true)
    
    //Create Variables for button and create restart button
    let addButton = document.getElementById("plus")
    let subButton = document.getElementById("minus")
    let likeButton = document.getElementById("heart")
    let pauseButton = document.getElementById("pause")
    let restartButton = document.createElement("button")

    let test = document.getElementsByTagName("body")
    
    
    //Add Events for buttons
    addButton.addEventListener('click', (e) => count.innerText++);
    subButton.addEventListener('click', () => count.innerText--);
    likeButton.addEventListener('click', displayLikes);
    pauseButton.addEventListener('click', pauseFunctionality);
    
    //Callback Functions for button events
    function displayLikes(event){
        let newLine = document.createElement("li");
        //console.log(newLine)
        let whereToPutLikes = document.querySelector('.likes');
        let likesList = whereToPutLikes.getElementsByTagName("li");
    

        //1: Iterate over every element in UL. 2: If element already exists (includes number) update it. 3: if not, create element.
        if(likesList.length === 0)
        {
            newLine.innerText = `${count.innerText} has been liked 1 time.`;
            whereToPutLikes.appendChild(newLine)
        }
        else 
        {
            let countInt = parseInt(count.innerText)
            for (let i = 0; i < likesList.length; i++) {
                let [number, , , , amount, ] = likesList[i].innerText.split(' ');
                let amountInt = parseInt(amount)
                let numberInt = parseInt(number)
                
                if (numberInt === countInt) {
                    amountInt++
                    console.log(likesList[i].innerText)
                    likesList[i].innerText = `${countInt} has been liked ${amountInt} times.`
                }
                else {
                    newLine.innerText = `${count.innerText} has been liked 1 time.`;
                    whereToPutLikes.appendChild(newLine);
                }
            }
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



    function commentFunctionality(event){

    }
})