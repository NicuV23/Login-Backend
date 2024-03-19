document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.querySelector(".greeting");
  const logOut = document.querySelector(".logout");

  if (!sessionStorage.name) {
    location.href = "/login";
  } else {
    greeting.innerHTML = `hello ${sessionStorage.name}`;
  }

  logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
  };
});
