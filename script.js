function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  }
  
  let hum__menu = document.getElementById("hum__menu")
  let mobile__menu = document.getElementById("mobile__menu")

  hum__menu.addEventListener("click", ()=>{
    mobile__menu.classList.toggle('show');
  });