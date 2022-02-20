// 1 variant

const usersList = document.getElementById('list');

console.log('Output result variant 1:', usersList.firstElementChild.innerHTML, usersList.lastElementChild.innerHTML,
usersList.firstElementChild.nextElementSibling.innerHTML, usersList.lastElementChild.previousElementSibling.innerHTML,
usersList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
)

// 2 variant

console.log('Output result variant 2:', usersList.children[0].innerHTML, usersList.children[usersList.children.length - 1].innerHTML,
usersList.children[1].innerHTML, usersList.children[3].innerHTML, usersList.children[2].innerHTML
)
