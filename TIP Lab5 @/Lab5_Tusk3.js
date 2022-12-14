const navItems = document.querySelectorAll("nav>ul>li");
console.log(navItems)

navItems.forEach((item) => {
  item.onmouseover = itemMouseoverHandler;
  item.onmouseout = itemMouseoutHandler;
});

function itemMouseoverHandler() {
  this.children[1].style.display = "block";
}

function itemMouseoutHandler() {
  this.children[1].style.display = "none";
}
