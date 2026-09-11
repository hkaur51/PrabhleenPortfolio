
document.querySelectorAll('.carousel').forEach((c)=>{
  const track=c.querySelector('.carousel-track');
  const slides=[...c.querySelectorAll('.carousel-slide')];
  const dotsWrap=c.querySelector('.dots');
  let index=0;
  slides.forEach((_,i)=>{
    const b=document.createElement('button');
    b.className='dot'+(i===0?' active':'');
    b.setAttribute('aria-label',`Go to slide ${i+1}`);
    b.onclick=()=>go(i);
    dotsWrap.appendChild(b);
  });
  const dots=[...dotsWrap.children];
  function go(i){
    index=(i+slides.length)%slides.length;
    track.style.transform=`translateX(-${index*100}%)`;
    dots.forEach((d,j)=>d.classList.toggle('active',j===index));
  }
  c.querySelector('.prev')?.addEventListener('click',()=>go(index-1));
  c.querySelector('.next')?.addEventListener('click',()=>go(index+1));
});
