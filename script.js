const menu = document.querySelector('.menu-btn')

const close = document.querySelector('.close-btn')

const menuSection = document.querySelector('.menu-section')


menu.addEventListener('click', () => {
    menuSection.classList.remove('hidden')
})

close.addEventListener('click', () => {
    menuSection.classList.add('hidden')
})