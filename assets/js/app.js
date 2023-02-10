function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
  
    const background = document.querySelector('body');
    const textsub = document.querySelector('div#sub-title');
    const textp = document.querySelector('div#sub-p');
  
    const icons = [
      document.querySelector('#container-circle-img-1'),
      document.querySelector('#container-circle-img-2'),
      document.querySelector('#container-circle-img-3')
    ];
  
    textp.innerHTML = `Agora são exatamente ${hour}h ${minute}min e ${seconds} segundos`;
  
    let message;
    let activeIcon;
    if (hour >= 6 && hour < 12) {
      message = "BOM DIA! 🌅";
      background.style.backgroundColor = '#F0DD9C'
      activeIcon = 0;
    } else if (hour >= 12 && hour < 18) {
      message = "BOA TARDE! 😂";
      background.style.backgroundColor = '#f49e12'
      activeIcon = 1;
    } else if (hour >= 18 && hour < 23) {
      message = "BOA NOITE! 😴";
      background.style.backgroundColor = '#191970'
      activeIcon = 2;
    } else {
      message = "BOA MADRUGADA! 😳";
      background.style.backgroundColor = '#03023d'
      activeIcon = 2;
    }
    textsub.innerHTML = message;
  
    icons.forEach((icon, i) => {
      if (i === activeIcon) {
        icon.classList.add('hide');
      } else {
        icon.classList.remove('hide');
      }
    });
  
    setTimeout(function() {
      window.location.reload(1);
    }, 600000 ); // A cada 10 minutos tem um refresh na page 
  }
  
  setInterval(updateTime, 1000);
