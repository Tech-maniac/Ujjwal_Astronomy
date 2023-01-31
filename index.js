
//Function created to fetch all the API data. (can use it wherever we want using return keyword)
const getAllAstronomyData= async()=> 
{
    let url = 'https://go-apod.herokuapp.com/apod';
    try 
    {
        let res = await fetch(url);
        data = await res.json();
        console.log(data);
        return data;
    } 
    catch (error) 
    {
        console.log(error);
    }
}

//Function to display the astronomy data 
const displayAstronomyData=async()=>{
    let astronomy = await getAllAstronomyData();

    let html = `<p>Date :${astronomy.date}</p>
    <p>Title :${astronomy.title}</p>
    <p>Explaination:${astronomy.explanation}</p>`;
    
 
    let astronomyRef = document.getElementById('astronomy_container');
    astronomyRef.innerHTML= html;
}

//Called the function to display astronomy data, so that it is shown by default
displayAstronomyData();

//Function created to display the image, called only when button is clicked
const displayImgs=async()=>
{
    let users = await getAllAstronomyData();
    let html = `<div class="user">
    <img src="${users.hdurl}" >
</div>`;

    let container = document.querySelector('.img_container');
    container.innerHTML = html;
}

let btnRef = document.getElementById("btn");

//Added event listener which calls the function to display the atronomy image.
btnRef.addEventListener('click',displayImgs);



