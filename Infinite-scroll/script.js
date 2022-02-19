import APIKEY from "./config.js";
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");


let photosArray=[]
let totalimages=0
let imagesLoaded=0
let ready=false

getphotos()
async function getphotos(){
    const query="flower"
    const count = 20
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=${count}&query=${query}&orientation=squarish;`;

    try{
        const response=await fetch(apiUrl)
        photosArray=await response.json()
        console.log(photosArray)
        displayPhotos()
    }
    catch(e){
        console.log(e)
    }
}
function displayPhotos(){
    imagesLoaded=0
    totalimages=photosArray.length
    photosArray.forEach((photo)=>{
        const item=document.createElement("a")

        setAttributes(item,{
            href:photo.links.html,
            target:"_blank"
        })
        const img = document.createElement("img");
        setAttributes(img,{
            src:photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        img.addEventListener("load",imageLoad)
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}
function setAttributes(element,attributes){
    for(let key in attributes){
        element.setAttribute(key,attributes[key])
    }
}
function imageLoad(){
    imagesLoaded++
    if(imagesLoaded==totalimages){
        ready=true
        loader.hidden=true
    }
}
window.addEventListener("scroll",()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-1000 && ready){
        ready=false
        getphotos()
    }
})