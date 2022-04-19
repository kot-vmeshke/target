function acc() {
  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Переключение между добавлением и удалением класса "active",
      чтобы выделить кнопку, управляющую панелью */
      this.classList.toggle("active");

      /* Переключение между скрытием и отображением активной панели */
      var panel = this.nextElementSibling;
      panel.classList.toggle("active");
    });
  }
}

function menu() {
  const btn = document.querySelector('.header__nav-button');
  const nav = document.querySelector('.header__nav');

  document.addEventListener('click', (e) => {

    console.log(e.target);
    console.log(e.composedPath());
    const within1 = e.composedPath().includes(nav);
    const within2 = e.composedPath().includes(btn);
    console.log(within1, within2);
  
  
    if ( !within1 && !within2) {
      btn.style.transform = '';
      nav.style.transform = '';
      nav.style.display = '';
      btn.classList.remove('js-opened');
    }
  })

  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav-link')) {
      btn.style.transform = '';
      nav.style.transform = '';
      nav.style.display = '';
      btn.classList.remove('js-opened');
    }
  })

  btn.addEventListener('click', () => {
    if (btn.classList.contains('js-opened')) {
      btn.style.transform = '';
      nav.style.transform = '';
      nav.style.display = '';
      btn.classList.remove('js-opened');
    } else {
      btn.classList.add('js-opened');
      btn.style.transform = 'rotate(90deg)';
      nav.style.display = 'flex';
      nav.style.transform = 'translate(0, 0)';
    }
  })
}

menu();
acc();

