document.getElementById("carbonblackened")?.addEventListener("click", () => {
  var img = document.getElementById("imageElementId") // Replace with the actual ID of the image element
  if (img) {
    img.src = "./images/carbonblackened.jpg"
    img.addEventListener("click", () => {
      img.classList.toggle("expanded")
    })
  }
})

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const navRight = document.querySelector(".nav-right")

  if (menuToggle && navRight) {
    menuToggle.addEventListener("click", () => {
      navRight.classList.toggle("active")
      menuToggle.textContent = navRight.classList.contains("active") ? "✕" : "☰"
    })

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".navbutton")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navRight.classList.remove("active")
        menuToggle.textContent = "☰"
      })
    })
  }
})
