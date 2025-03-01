document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("../components/navbar.html");
    const data = await res.text();
    document.getElementById("navbar-container").innerHTML = data;
  } catch (error) {
    console.error(error);
  }
});
