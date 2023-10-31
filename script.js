
  menuMobile = document.querySelector('.mobile-menu');
  menuMobileBtn = document.getElementById('hamburger-menu');

  menuMobileBtn.addEventListener('click',()=>{
    console.log(menuMobile.dataset);
    menuMobile.dataset.active = menuMobile.dataset.active==="true" ? 'false' : 'true'; 
  });