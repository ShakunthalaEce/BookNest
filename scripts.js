var bookPopup=document.getElementById("book-popup");
var overlay=document.getElementById("overlay");
var addButton=document.getElementById("Add-outer")

// function Add()
// {
//     bookPopup.style.display=block;
//     overlay.style.display=block;
// }

addButton.addEventListener("click",function()
{
    console.log("Add button clciked");
    bookPopup.style.display="block";
    overlay.style.display="block";
})

var cancel=document.getElementById("cancel");
cancel.addEventListener("click",function(event)
{
    event.preventDefault()
    bookPopup.style.display="none";
    overlay.style.display="none";
})

const bookContainer=document.getElementById("container");
const add=document.getElementById("Add");

const bookTitle=document.getElementById("book-title");
const author=document.getElementById("book-author");
const des=document.getElementById("description");
const deleteEle=document.getElementById("Delete")

add.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h3>${author.value}</h3>
    <p>${des.value}</p>
    <button>Delete</button>`
    bookContainer.append(div);
    bookPopup.style.display="none";
    overlay.style.display="none"; 
})


// function deleteCard(event)
// {
//     console.log("Delete button clicked");
//     event.target.parentElement.remove();
// } 

// const deleteButton=document.getElementById("deleteButton")

// deleteButton.addEventListener("click",function(event)
// {
//     console.log("Delete button clicked");
//     event.target.parentElement.remove();
// })


// const container = document.getElementById('container');

// Event delegation: Attach event listener to the container
bookContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Delete') {
        deleteCard(event);
    }
});

function deleteCard(event) {
    console.log('Delete button clicked');
    event.target.parentElement.remove();
}