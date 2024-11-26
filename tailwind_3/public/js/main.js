const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn')
  const mobileMenu = document.getElementById('mobileMenu')

  const toogleMenu = () => {
    console.log('Hamburger Button clicked')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  hamburgerBtn.addEventListener('click', toogleMenu)
  mobileMenu.addEventListener('click', toogleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
