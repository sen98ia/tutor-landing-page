import renderDropdownMenu from './view.js';

export default () => {
  const contactsButtons = document.querySelectorAll('.contact-button');
  const contactsSection = document.querySelector('#contacts');

  contactsButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      contactsSection.scrollIntoView();
    })
  });

  const burgerButton = document.querySelector('.burger-menu-button');
  const dropdownMenu = document.querySelector('.header-dropdown-menu');
  burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderDropdownMenu(dropdownMenu, burgerButton);
  });
};