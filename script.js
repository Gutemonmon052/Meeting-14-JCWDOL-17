document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#mobile-on").addEventListener("click", () => {
    document.querySelector(".mobile-mode-on").style.display = "none";
    document.querySelector(".mobile-mode-off").style.display = "flex";
    document.querySelector(".mobile-mode-menus").style.display = "flex";
    document.querySelector(".mobile-mode-menus").style.animation =
      "easeIn 0.3s ease-in-out";
  });

  document.querySelector("#mobile-off").addEventListener("click", () => {
    document.querySelector(".mobile-mode-on").style.display = "flex";
    document.querySelector(".mobile-mode-off").style.display = "none";
    document.querySelector(".mobile-mode-menus").style.display = "none";
  });

  let content21Sec4 = document.querySelectorAll(".content21-sec4");
  let pagination = document.querySelectorAll(".page");

  document.querySelector("#btn-next").addEventListener("click", () => {
    let active = document.querySelector(".active");
    let next = document.querySelector(".next");
    let index = Array.from(content21Sec4).indexOf(next);
    let indexPagination = Array.from(pagination).indexOf(active);

    if (indexPagination < pagination.length - 1) {
      active.classList.remove("active");
      next.classList.remove("next");
      content21Sec4[index].style.display = "none";
      content21Sec4[index + 1].style.display = "block"; 
      content21Sec4[index + 1].classList.add("next");
      pagination[indexPagination + 1].classList.add("active");
    }

    if(indexPagination === pagination.length - 1) {
      indexPagination = 0;
      active.classList.remove("active");
      next.classList.remove("next");
      content21Sec4[index].style.display = "none";
      content21Sec4[indexPagination].style.display = "block"; 
      content21Sec4[indexPagination].classList.add("next");
      pagination[indexPagination].classList.add("active");
    }
  });

  document.querySelector("#btn-prev").addEventListener("click", () => {
    let active = document.querySelector(".active");
    let next = document.querySelector(".next");
    let index = Array.from(content21Sec4).indexOf(next);
    let indexPagination = Array.from(pagination).indexOf(active);

    if (indexPagination > 0) {
      active.classList.remove("active");
      next.classList.remove("next");
      content21Sec4[index].style.display = "none";
      content21Sec4[index - 1].style.display = "block"; 
      content21Sec4[index - 1].classList.add("next");
      pagination[indexPagination - 1].classList.add("active");
    }

    if(indexPagination === 0) {
      indexPagination = pagination.length - 1;
      active.classList.remove("active");
      next.classList.remove("next");
      content21Sec4[index].style.display = "none";
      content21Sec4[indexPagination].style.display = "block"; 
      content21Sec4[indexPagination].classList.add("next");
      pagination[indexPagination].classList.add("active");
    }
  });
});
