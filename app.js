const openButton = document.getElementById('btn');
const myModal = document.querySelector('.card');
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', () => {
  myModal.style.opacity = '0';
  myModal.style.top = '150px';
});

openButton.addEventListener('click', () => {
  myModal.style.opacity = '100';
  myModal.style.top = '300px';
});
