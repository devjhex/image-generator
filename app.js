/*Select the button element */

let generateBtn = document.getElementById('generate');
let url = 'https://jsonplaceholder.typicode.com/photos';
const imgstr = 'https://picsum.photos/id/41/400/300/';
const gif = 'https://cdn2.thecatapi.com/images/ait.gif'
// console.log(generateBtn);

generateBtn.addEventListener("click",function(){
    fetch(imgstr)
    .then(response=>{
        console.log(response);
        return response.blob();
    })
    .then(blob=>{
        console.log(blob);
        let image = URL.createObjectURL(blob);
        console.log(image);
        let img = document.getElementById("pic");
        img.src = image;
        img.alt = "This is random dog image!"
    })
    .catch(error=>{
        console.warn(error.message);
    })
})