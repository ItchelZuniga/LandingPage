window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle("scrolling", scrollY > 
  50)
})

  const counters = document.querySelectorAll('.counter');

  const speed = 100;

  counters.forEach((counter)=>{
    const updateNum = ()=>{
      const targetNum = parseInt(counter.dataset.number);
      //console.log(targetNum)
      const initialNum = parseInt(counter.innerText);
      //console.log(initialNum)
      const incNum = Math.trunc(targetNum / speed)
      //console.log(incNum)
      if(initialNum < targetNum){
        counter.innerText = initialNum + incNum;
        setTimeout(updateNum, 20);
      }
    };
    updateNum();
  });

  const navlist = document.querySelector('navlist');
  const menuBtn = document.querySelector('.fa-bars');

  menuBtn.onclick = function(){
    navlist.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
  }

  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
  })
  sr.reveal('.home .left', {delay: 222, origin: 'left'})
  sr.reveal('.home .right', {delay: 222, origin: 'top'})
  sr.reveal('.features .left', {delay: 222, origin: 'top'})
  sr.reveal('.features .left .author', {delay: 422, origin: 'left'})
  sr.reveal('.features .right', {delay: 222, origin: 'bottom'})
  sr.reveal('.feature-cards', {delay: 222, origin: 'bottom'})
  sr.reveal('.about-container .right', {delay: 222, origin: 'bottom'})
  sr.reveal('.pricing', {delay: 222, origin: 'top'})
  sr.reveal('.testimonials .left', {delay: 422, origin: 'left'})
  sr.reveal('.testimonials .right', {delay: 222, origin: 'bottom'})
  sr.reveal('.banner', {delay: 222, origin: 'top'})
  sr.reveal('.contact', {delay: 222, origin: 'bottom'})
  sr.reveal('.footer', {delay: 222, origin: 'top'})