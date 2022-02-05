window.onload = function () {
  const nowElem = document.getElementById("now");
  const date = new Date();
  nowElem.textContent = date.toLocaleTimeString();

  setInterval(() => {
    const nowElem = document.getElementById("now");
    const date = new Date();
    nowElem.textContent = date.toLocaleTimeString();
  }, 1000);
};
