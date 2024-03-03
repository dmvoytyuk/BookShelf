import { auth, signUserOut } from './firebase';
import { showModalAuth } from './modalauth';

export function updateSignInOutButton() {
  const signInOutButton = document.querySelectorAll('.signinout-button');
  const user = auth.currentUser;
  if (user) {
    signInOutButton.forEach(button => {
      button.textContent = `${user.displayName}, Sign Out`;
      button.addEventListener('click', signUserOut);
    });
  } else {
    signInOutButton.forEach(button => {
      button.textContent = 'Sign In';
      button.addEventListener('click', showModalAuth);
    });
  }
}
