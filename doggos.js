// we typed breeds url in uppercase because it'll never change and it's also a constatnt
/* const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';


// function to add doggos pictures and we can call it more than one time
function addDoggo(){
    
    // show loading spinner
    // the word fetch refering to using [AJAX] here
    fetch(BREEDS_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // this will create a new img tag
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'cute doggo';
        img.style.maxWidth = '400px';
        img.classList.add('little-space');
    
        // append the image to doggos div
        document.querySelector('.doggos').appendChild(img);


        // hide loading spinner
    })
    
}



// select add and remove doggo button
let newDoggo = document.querySelector('.add-doggo-pic');

// add an event to add button
newDoggo.addEventListener('click', addDoggo); */


/*start doing dog excercise app*/

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
/*selecting 'select' element form html DOM*/
const select = document.querySelector('.breeds');
let doggosWrapper = document.querySelector('.doggos');

fetch(BREEDS_URL).then(response => {
    return response.json();
}).then(data => {
    // console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);


    // looping through breeds array
    for(let i =0; i < breedsArray.length; i++){
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        
        /* append that option we ceated to the select menu */
        select.appendChild(option);
    }
})

/* setting an event for changing in select element */
select.addEventListener('change', event =>{
    let url =`https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getDoggo(url);
});


/* start fetching url of the image */

/* first , we will create an element image */
const breedImage = document.querySelector('.dog-img');

function getDoggo(url){
    fetch(url)
    .then(data => {
        return data.json();
    })
    .then(data => {
        breedImage.src = data.message;
    })
}