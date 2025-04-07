const renderDropdownMenu = (menu, button) => {
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  if (menu.children.length === 0) {
    const menuList = document.querySelector('.header-menu-list');
    const dropdownMenuList = menuList.cloneNode(true);
    dropdownMenuList.classList.add('dropdown');
    menu.append(dropdownMenuList);
  }

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.classList.add('hidden');
    main.classList.remove('muted');
    footer.classList.remove('muted');
    button.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path></g></svg>';
  } else {
    menu.classList.remove('hidden');
    menu.classList.add('active');
    main.classList.add('muted');
    footer.classList.add('muted');
    button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
  }
};

export default renderDropdownMenu;