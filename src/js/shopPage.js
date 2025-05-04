// Knife data
const knives = [
  {
    id: 1,
    name: "Deer Antler Mora #1 - Carbon  - Acid Etched",
    description: "High edge retention for cutting tasks",
    price: 79.99,
    image: "../../images/carbonblackened.jpg", // Path is correct relative to HTML file location
    category: "hunting",
    link: "https://www.etsy.com/shop/YourShopName",
  },
  {
    id: 2,
    name: "Deer Antler Mora #1 - Carbon  - Stonewashed",
    description: "Beautiful stonewashed finish",
    price: 89.99,
    image: "../../images/carbonstonewashed.jpg",
    category: "hunting",
    link: "https://www.etsy.com/shop/YourShopName",
  },
  {
    id: 3,
    name: "Deer Antler Mora #1 - Stainless",
    description: "High corrosion resistance",
    price: 79.99,
    image: "./images/knife-pic-4.png",
    category: "fishing",
    link: "https://www.etsy.com/shop/YourShopName",
  },
  {
    id: 4,
    name: "Deer Antler Handle Payne Bros Custom Knives Blade",
    description: "Custom made knife - you pick the blade style",
    price: 89.99,
    image: "./images/knife pic 2.jpg",
    category: "kitchen",
    link: "https://www.etsy.com/shop/YourShopName",
  },
  {
    id: 5,
    name: "Deer Antler Mora #1 - Normal Carbon",
    description: "Clean and simple design, high edge retention",
    price: 59.99,
    image: "./images/carbonblackened.jpg",
    category: "kitchen",
    link: "https://www.etsy.com/shop/YourShopName",
  },
]

// DOM elements
const searchInput = document.getElementById("search-input")
const sortSelect = document.getElementById("sort-select")
const knivesGrid = document.getElementById("knives-grid")
const noResults = document.getElementById("no-results")

// Render knife cards
function renderKnives(knivesToRender) {
  knivesGrid.innerHTML = ""

  if (knivesToRender.length === 0) {
    knivesGrid.classList.add("hidden")
    noResults.classList.remove("hidden")
    return
  }

  knivesGrid.classList.remove("hidden")
  noResults.classList.add("hidden")

  knivesToRender.forEach((knife) => {
    const knifeCard = document.createElement("div")
    knifeCard.className = "knife-card"

    knifeCard.innerHTML = `
      <div class="knife-image-container">
        <img src="${knife.image}" alt="${knife.name}" class="knife-image" loading="lazy">
      </div>
      <div class="knife-content">
        <h2 class="knife-title">${knife.name}</h2>
        <p class="knife-description">${knife.description}</p>
        <p class="knife-price">$${knife.price.toFixed(2)}</p>
        <a href="${knife.link}" target="_blank" rel="noopener noreferrer" class="buy-button">
          Buy on Etsy
          <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `

    knivesGrid.appendChild(knifeCard)
  })
}

// Filter and sort knives
function filterAndSortKnives() {
  const searchQuery = searchInput.value.toLowerCase()
  const sortBy = sortSelect.value

  // Filter knives
  const filteredKnives = knives.filter(
    (knife) => knife.name.toLowerCase().includes(searchQuery) || knife.description.toLowerCase().includes(searchQuery),
  )

  // Sort knives
  const sortedKnives = [...filteredKnives].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price
    } else if (sortBy === "price-high") {
      return b.price - a.price
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    return 0 // Default: featured
  })

  renderKnives(sortedKnives)
}

// Event listeners
searchInput.addEventListener("input", filterAndSortKnives)
sortSelect.addEventListener("change", filterAndSortKnives)

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  filterAndSortKnives()
})
