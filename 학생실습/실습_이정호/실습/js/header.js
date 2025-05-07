const trigger = document.querySelector('.trigger');
const menuTrigger = document.querySelector('.menu-trigger');
const closeBtn = document.querySelector('.close-btn');
    
trigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    menuTrigger.classList.remove('active');
});