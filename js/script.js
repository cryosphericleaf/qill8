const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menuitem"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });