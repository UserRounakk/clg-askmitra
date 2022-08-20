let resources = document.getElementById('resources-tab');

let resource_buttons = resources.querySelectorAll('button');
// console.log(resource_buttons);
resource_buttons.forEach(button=>{
    button.addEventListener("click",resourceButtonClicked)
})

function resourceButtonClicked(e){
    let current_primary = resources.querySelector('.text-bg-primary');
    current_primary.classList.replace('text-bg-primary', 'tab-secondary');
    current_primary.childNodes[1].classList.add("text-black");
    e.target.parentElement.classList.replace("tab-secondary","text-bg-primary");
    e.target.classList.remove("text-black")
}
let images = document.querySelectorAll("img")
images.forEach(image=>{
    image.addEventListener("error", imageNotFound)
})

function imageNotFound(e){
    e.target.src = "images/not-found.webp";
    console.clear();  
}