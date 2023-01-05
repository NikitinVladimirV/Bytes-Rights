// Scroll
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  const blocks = document.querySelectorAll('.section');
  blocks.forEach((el, i) => {
    if (el.offsetTop - document.querySelector('.header').clientHeight - 100 <= scrollDistance) {
      document.querySelectorAll('.nav-link').forEach((el) => {
        if (el.classList.contains('nav-link--active')) {
          el.classList.remove('nav-link--active');
        }
      });
      document.querySelectorAll('.nav-item')[i].querySelector('a').classList.add('nav-link--active');
    }
  });
});

// Language buttons
const btnEng = document.querySelector('#en');
btnEng.addEventListener('click', (e) => {
  alert('Англоязычная страница на стадии разработки');
});

// Modal
const body = document.querySelector('.body');
const modalOverlay = document.querySelector('.modal__overlay');
const modalBtns = document.querySelectorAll('.services__card-btn');
const modalWindows = document.querySelectorAll('.modal__window');
const feedbackBtns = document.querySelectorAll('.modal__btn');
const closeBtns = document.querySelectorAll('.modal__close');
modalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal__window--visible');
    modalOverlay.classList.add('modal__overlay--visible');
    body.style.overflow = "hidden";
  });
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  };
});
feedbackBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  });
});
closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  });
});

// Send mail
const form = document.querySelector('.form');
const sendMessage = document.querySelector('.send-modal');
function sendMail() {
  let formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        sendMessage.classList.add('send-modal--visible');
        setTimeout(() => sendMessage.classList.remove('send-modal--visible'), 2000);
      };
    };
  };
  xhr.open('POST', '../mail.php', true);
  xhr.send(formData);
  form.reset();
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMail();
});

// Privacy policy
const privacyPolicyBtn = document.querySelector('.checkbox__link');
privacyPolicyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Эта страница находиться в разработке, попробуйте зайти позднее.');
});

// Services card
const cards = document.querySelectorAll('.services__card');
cards.forEach(card => {
  card.addEventListener('click', (e) => {
    cards.forEach(card => {
      card.classList.remove('is-active');
    });
    card.classList.add('is-active');
  });
  // document.addEventListener('click', (e) => {
  //   cards.forEach(card => {
  //     card.classList.remove('is-active');
  //   });
  // });
});


