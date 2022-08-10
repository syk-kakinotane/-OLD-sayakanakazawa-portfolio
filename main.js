'use strict';

const typeTarget = document.querySelectorAll('.typing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.textContent;
            let typeSprit = typeContent.split('');
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.textContent = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                entry.target.textContent += typeSprit[typeLength];
                typeLength++;
            }, typeSpeed);

        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
  
    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  }