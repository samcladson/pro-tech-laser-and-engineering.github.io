$(function () {
  $("#header").load("./header.html");
  $("#footer").load("./footer.html");
});

const navigate = (path) => {
  window.location.replace(path);
};
