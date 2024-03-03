const signupButton = document.querySelector('.modal-auth-from-button');

export const showModalAuth = () => {
  const modalAuth = document.querySelector('.backdrop-modal-auth');
  modalAuth.classList.add('is-open');
};

signupButton.addEventListener('click', e => {
  e.preventDefault();
  console.log(e);
});
