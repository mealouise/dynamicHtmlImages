
//1. MAKE NUMBER OF BOXES DEFINED IN THE CODE APPEAR ON SCREEN


// const wrapper = document.getElementById("wrapper");


// for (let i = 0; i < 10; i++) {
//     let boxes = document.createElement("div"); // won't show up so have to append to body
//     boxes.classList.add("box");
    
//     wrapper.appendChild(boxes);
// }


//2. ALLOW USER TO SPECIFY HOW MANY BOXES THEY WANT ON THE SCREEN AND DISPLAY THAT ON THE SCREEN
// let boxNum;

//const wrapper = document.getElementById("wrapper");
// const submit = document.getElementById("submit");
// const input = document.getElementById("input");

// submit.addEventListener("click", () => {
//     boxNum = input.value;
//     console.log(boxNum);
//     for (let i = 0; i < boxNum; i++) {
//         let boxes = document.createElement("div");
//         boxes.classList.add("box");
//         console.log(boxes);
//         wrapper.appendChild(boxes);
//     }
    
// })

//3.ALLOW USERS TO CLEAR ALL BOXES VIA A CLEAR BOXES BUTTON

// const clear = document.getElementById("clear");



// clear.addEventListener("click", () => {
//     console.log("i am clear button");
//     let boxes = wrapper.querySelectorAll(".box"); 
    
//     for (let i = 0; i < boxes.length; i++) {
        
//         console.log(boxes);
      
//         // boxes.removeChild(boxes[i]);
//         boxes[i].remove();

//     }
//     boxNum = 0;
//     // let boxes = wrapper.querySelectorAll(".box");
//     // console.log(boxes);

//     // now an array so have to loop through each of the boxes to remove them

// })


/* TRIAL & ERROR

for (let i = 0; i < boxNum; i++) {
    let boxes = wrapper.querySelectorAll(".box"); 
    console.log(boxes);
    boxes.remove();

}
*/
//4. ADDING IMAGES DYNAMICALLY TO BOXES USING UNSPLASH QUERY
//https://source.unsplash.com/random/500x500/?sig=<randomNum>&<query> *bold needs modifying*

// let keyword = "";


const wrapper = document.getElementById("wrapper");
const clear = document.getElementById("clear");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const queryInput = document.getElementById("queryInput");


submit.addEventListener("click", () => {
    let boxNum = input.value;
    let keyword = queryInput.value;
    // let randomNum = Math.ceil(Math.random() * 100);
    console.log(boxNum);
    for (let i = 0; i < boxNum; i++) {
        let boxes = document.createElement("div");
        boxes.classList.add("box");
        console.log(boxes);
        let randomNum = Math.ceil(Math.random() * 100);
        let img = document.createElement("img");
        img.src = `https://source.unsplash.com/random/500x500/?sig=${randomNum}&${keyword}`;
        boxes.appendChild(img);
        wrapper.appendChild(boxes);
    }
    
})


clear.addEventListener("click", () => {
    console.log("i am clear button");
    let boxes = wrapper.querySelectorAll(".box"); 
    
    for (let i = 0; i < boxes.length; i++) {    
        console.log(boxes); 
        // boxes.removeChild(boxes[i]);
        boxes[i].remove();
    }
    boxNum = 0;
    // let boxes = wrapper.querySelectorAll(".box");
    // console.log(boxes);
})