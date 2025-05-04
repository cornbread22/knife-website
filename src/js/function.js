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

  // Update the page title in the nav-text element
  const navText = document.querySelector(".nav-text")
  if (navText) {
    const currentPage = document.title.split(" - ")[1] || "Home"
    navText.textContent = "Neil's Knives"

    // Add a separate element for the page indicator
    const pageIndicator = document.createElement("span")
    pageIndicator.className = "page-indicator"
    pageIndicator.textContent = ` | ${currentPage}`
    navText.appendChild(pageIndicator)
  }

  if (menuToggle && navRight) {
    // Make sure the menu toggle is visible and clickable
    menuToggle.style.display = window.innerWidth <= 768 ? "block" : "none"

    // Update menu toggle visibility on window resize
    window.addEventListener("resize", () => {
      menuToggle.style.display = window.innerWidth <= 768 ? "block" : "none"
    })

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
