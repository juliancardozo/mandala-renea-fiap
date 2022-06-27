((d) => {
  $play = d.getElementById('play');
  $replay = d.querySelector(".replay");
  $playR = d.querySelector('.play-r');
  $capture = d.querySelector('.capture');
  $exit = d.querySelector('.exit');
  $img1 = d.querySelector('.roulette-yellow');
  $img2 = d.querySelector('.roulette-blue');
  $img3 = d.querySelector('.roulette-green');
  $manual = d.getElementById('manual');
  $automatic = d.getElementById('automatic');
  $slider = d.getElementById('slider');
  $slider2 = d.getElementById('slider-2');
  $slider3 = d.getElementById('slider-3');
  $pointer = d.querySelector('.pointer');
  
  $automatic.addEventListener('click', (e) => {
    e.preventDefault();
      $play.classList.add('none')
      $playR.classList.remove('none');
      $replay.classList.add('none');
      $capture.classList.add('none');
      $exit.classList.remove('none');
      $img1.classList.remove('transition-2')
      $img2.classList.remove('transition-2')
      $img3.classList.remove('transition-2')
      $img1.style.transform = `rotate(0deg)`;
      $img2.style.transform = `rotate(0deg)`;
      $img3.style.transform = `rotate(0deg)`;
      $slider.classList.add('opacity-none');
      $slider2.classList.add('opacity-none');
      $slider3.classList.add('opacity-none');
      $slider.value = 0;
      $slider2.value = 0;
      $slider3.value = 0;
      $playR.classList.remove('no-click')
      $exit.classList.remove('exit-grid');
      setTimeout(() => { 
      $img1.classList.add('transition')
      $img2.classList.add('transition-1')
      $img3.classList.add('transition-1-1')
      }, 100);
  
    });
  
  $playR.addEventListener("click", (e) => {
    e.preventDefault();

  
      let grados = (Math.round((Math.random() * 6) + 10) * 60);
      let grados2 = (Math.round((Math.random() * 12) + 10) * 60);
      let grados3 = (Math.round((Math.random() * 18) + 10) * 60);
      
      $playR.classList.add('no-click')
      $playR.classList.add('none')
      $replay.classList.remove('none')  
      $img1.style.transform = `rotate(${grados}deg)`;
      $img2.style.transform = `rotate(${grados2}deg)`;
      $img3.style.transform = `rotate(${grados3}deg)`;
      $pointer.classList.add('pointer-a');
    
      setTimeout(() => {
      $pointer.classList.remove('pointer-a');
      } , 7000);



      $pointer.classList.add('pointer-a');      
      setTimeout(() => {
        $replay.classList.remove('no-click')
      }, 7000);
    
    });
  
  $replay.addEventListener('click', (e) => {
      e.preventDefault();

      let grados = (Math.round((Math.random() * 6) + 10) * 60);
      let grados2 = (Math.round((Math.random() * 12) + 10) * 60);
      let grados3 = (Math.round((Math.random() * 18) + 10) * 60);
      $replay.classList.add('no-click')
      $replay.classList.add('none')
      $playR.classList.remove('none')
  
  
      $img1.style.transform = `rotate(${-grados}deg)`;
      $img2.style.transform = `rotate(${-grados2}deg)`;
      $img3.style.transform = `rotate(${-grados3}deg)`;
    
      $pointer.classList.add('pointer-a');      

    
      setTimeout(() => {
        $playR.classList.remove('no-click')
        $pointer.classList.remove('pointer-a');

      }, 7000);
    
    })

  // ----------------------Manual-Rotate----------------------
  $manual.addEventListener('click', (e) => {

      $play.classList.add('none');
      $capture.classList.add('none');
      $exit.classList.remove('none');
      $exit.classList.add('exit-grid');
      $slider.classList.remove('opacity-none');
      $slider2.classList.remove('opacity-none');
      $slider3.classList.remove('opacity-none');
      $playR.classList.add('none');
      $img1.style.transform = `rotate(0deg)`;
      $img2.style.transform = `rotate(0deg)`;
      $img3.style.transform = `rotate(0deg)`;
      $img1.classList.remove('transition');
      $img2.classList.remove('transition-1');
      $img3.classList.remove('transition-1-1');
      $replay.classList.add('none');
      $slider.value = 0;
      $slider2.value = 0;
      $slider3.value = 0;
    });

  $slider.addEventListener('input', (e) => {
    $img1.classList.add('transition-2')
    let sliderValue = $slider.value;
    rotate = sliderValue * 60;
    $img1.style.transform = `rotate(${rotate}deg)`;

  })

  $slider2.addEventListener('input', (e) => {
    $img2.classList.add('transition-2')
    let sliderValue = $slider2.value;

    rotate = sliderValue * 60;
    $img2.style.transform = `rotate(${rotate}deg)`;

  })

  $slider3.addEventListener('input', (e) => {
    $img3.classList.add('transition-2')
    let sliderValue = $slider3.value;    
    rotate = sliderValue * 60;
    $img3.style.transform = `rotate(${rotate}deg)`;

  })
 
  
})(document);


