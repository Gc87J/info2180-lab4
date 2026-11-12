const searchbtn = document.getElementById("search-btn");



searchbtn.addEventListener("click", () => {
fetch("superheroes.php")

.then(response => response.text())
.then(html => {
    const temp = document.createElement("div");
      temp.innerHTML = html;
      const names = [...temp.querySelectorAll("li")].map(li => li.textContent);
      alert(names.join("\n"));
    });
});



  