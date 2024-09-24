
//target the buttons
var btn1 = document.getElementById('modal--1');
var btn2 = document.getElementById('modal--2');
var btn3 = document.getElementById('modal--3');


//target the elements from the box
var modalBox = document.querySelector('#modal1--box');
var closeBtn = document.querySelector('#closeBtn1');
var title = document.getElementsByTagName('h2')[0];

//create function for the button 1
btn1.addEventListener('click', () => {
    modalBox.style.display = 'block';
});
btn2.addEventListener('click', () => {
    modalBox.style.display = 'block';
    title.textContent = "I'm the modal window 2 🤗";
});
btn3.addEventListener('click', () => {
    modalBox.style.display = 'block';
    title.textContent = "I'm the modal window 3 😍";
});


//add event listener for the close button
closeBtn.addEventListener('click', () => {
    modalBox.style.display = 'none';
})