import { auth, signUserOut, signUserUp, signUserIn } from './firebase';
const modalBackdrop = document.querySelector('.modal-auth-backdrop');
const signUpForm = document.querySelector('.modal-auth-form-signup');
const signInForm = document.querySelector('.modal-auth-form-signin');
const optionsList = document.querySelector('.modal-auth-options-list');
const optionsSignIn = document.querySelector('.modal-auth-options-signin');
const optionsSignUp = document.querySelector('.modal-auth-options-signup');

export const showModalAuth = () => {
  const signOutButton = document.querySelector('.modal-auth-signout-button');
  const modalBackdropCloseButton = document.querySelector(
    '.modal-auth-close-button'
  );
  modalBackdrop.classList.add('is-open');
  modalBackdropCloseButton.addEventListener('click', closeModalAuth);
  const user = auth.currentUser;
  if (!user) {
    signInForm.classList.add('is-open');
    optionsList.classList.add('is-open');
    optionsSignIn.classList.add('active');
    signInForm.addEventListener('submit', signUserIn);
    optionsList.addEventListener('click', changeSignForm);
  } else {
    signOutButton.classList.add('is-open');
    optionsList.classList.remove('is-open');
    signOutButton.textContent = `${user.displayName}, Sign Out`;
    signOutButton.addEventListener('click', signUserOut);
  }
};

function closeModalAuth(e) {
  modalBackdrop.classList.remove('is-open');
  modalBackdrop.removeEventListener('click', closeModalAuth);
  optionsList.removeEventListener('click', changeSignForm);
  optionsSignUp.classList.remove('active');
  signUpForm.classList.remove('is-open');
  signInForm.classList.remove('is-open');
  optionsSignIn.classList.remove('active');
}

function changeSignForm(e) {
  const currentForm = document.querySelector('.active');
  if (
    e.target.classList.contains('modal-auth-options-signin') &&
    e.target.classList.contains('modal-auth-options-signin') !== currentForm
  ) {
    signInForm.classList.add('is-open');
    optionsSignIn.classList.add('active');
    optionsSignUp.classList.remove('active');
    signUpForm.classList.remove('is-open');
    signUpForm.removeEventListener('submit', signUserUp);
    signInForm.addEventListener('submit', signUserIn);
  }
  if (
    e.target.classList.contains('modal-auth-options-signup') &&
    e.target.classList.contains('modal-auth-options-signup') !== currentForm
  ) {
    signInForm.classList.remove('is-open');
    optionsSignIn.classList.remove('active');
    signUpForm.classList.add('is-open');
    optionsSignUp.classList.add('active');
    signInForm.removeEventListener('submit', signUserIn);
    signUpForm.addEventListener('submit', signUserUp);
  }
}
