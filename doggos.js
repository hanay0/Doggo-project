
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
/* selecting spinner div which has the animation emoji */
const spinner = document.querySelector('.spinner');

function getDoggo(url){
    /* show spinner before showing the image */
    spinner.classList.add('show');
    breedImage.classList.remove('show');
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        breedImage.src = data.message;
        // spinner.classList.remove('show');
        // breedImage.classList.add('show');
    })
}

/*fixing loading images (until loading ends) */
breedImage.addEventListener('load', function(){
    spinner.classList.remove('show');
    breedImage.classList.add('show');
})