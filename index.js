// buttons
const webApp = document.getElementById("webApp");
const mobileApp = document.getElementById("mobileApp");
const all = document.getElementById("all");
// websites
const app = document.getElementById("app");
const website = document.getElementById("website");

app.style.transition = 'all 1s';

webApp.addEventListener("click", function (e) {
  webApp.classList.add("active");
  mobileApp.classList.remove("active");
  all.classList.remove("active");

  app.classList.add("remove");
  website.classList.remove("remove");
});
all.addEventListener("click", function (e) {
  webApp.classList.remove("active");
  mobileApp.classList.remove("active");
  all.classList.add("active");

  app.classList.remove('remove');
  website.classList.remove('remove');
});
mobileApp.addEventListener("click", function (e) {
  webApp.classList.remove("active");
  mobileApp.classList.add("active");
  all.classList.remove("active");

    app.classList.remove("remove");
    website.classList.add("remove");
});

