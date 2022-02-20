const mainDiv = document.getElementById('mainDiv');

const myBtn = document.getElementById('myBtn');

const myList = document.getElementById('notificationList');

myList.style.listStyleType = 'none'

myBtn.addEventListener("click", () => {
    myList.prepend(document.createElement("li"))
    myList.firstElementChild.innerHTML = 'I was clicked'
})
myBtn.addEventListener("mouseover", () => {
    myList.prepend(document.createElement("li"))
    myList.firstElementChild.innerHTML = 'Mouse is on me'
})
myBtn.addEventListener("mouseout", () => {
    myList.prepend(document.createElement("li"))
    myList.firstElementChild.innerHTML = 'Mouse is not on me'
})