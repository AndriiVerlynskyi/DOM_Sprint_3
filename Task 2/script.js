
document.body.firstElementChild.style.backgroundColor = "lightgreen";

const myDiv = document.getElementById('myDiv');

myDiv.firstElementChild.style.fontWeight = '600';
myDiv.children[1].style.color = 'red';
myDiv.children[2].style.textDecoration = 'underline'
myDiv.children[3].style.fontStyle = 'italic'

const myList = document.getElementById('myList');

myList.style.display = 'flex';
myList.style.listStyleType = 'none';
myList.nextElementSibling.style.display = 'none'