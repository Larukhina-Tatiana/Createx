const selects = document.querySelectorAll(".form__select");
selects.forEach((el) => {
  new Choices(el, {
    shouldSort: false,
    position: "bottom",
    searchEnabled: false,
  });
});
