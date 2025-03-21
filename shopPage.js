// Knife data
const knives = [
  {
    id: 1,
    name: "Chef's Knife",
    description: "Professional 8-inch chef's knife for all kitchen tasks",
    price: 89.99,
    image: "./carbonblackened.jpg",
    category: "kitchen",
  },
  {
    id: 2,
    name: "Santoku Knife",
    description: "Japanese-style all-purpose kitchen knife with scalloped edge",
    price: 79.99,
    image: "./carbonstonewashed.jpg",
    category: "kitchen",
  },
  {
    id: 3,
    name: "Bread Knife",
    description: "Serrated edge perfect for slicing bread without crushing",
    price: 49.99,
    image: "./stainless.jpg",
    category: "kitchen",
  },
  {
    id: 4,
    name: "Paring Knife",
    description: "Small knife for peeling and detailed cutting work",
    price: 29.99,
    image: "./knife pic.png",
    category: "kitchen",
  },
  {
    id: 5,
    name: "Utility Knife",
    description: "Versatile medium-sized knife for various cutting tasks",
    price: 39.99,
    image: "./knife-pic-4.png",
    category: "utility",
  },
  {
    id: 6,
    name: "Boning Knife",
    description: "Flexible blade designed for separating meat from bone",
    price: 59.99,
    image: "https://placehold.co/300x300/1e1e1e/cccccc?text=Boning+Knife",
    category: "kitchen",
  },
  {
    id: 7,
    name: "Cleaver",
    description: "Heavy-duty knife for chopping through bones and tough materials",
    price: 69.99,
    image: "https://placehold.co/300x300/1e1e1e/cccccc?text=Cleaver",
    category: "kitchen",
  },
  {
    id: 8,
    name: "Pocket Knife",
    description: "Compact folding knife for everyday carry and outdoor use",
    price: 45.99,
    image: "https://placehold.co/300x300/1e1e1e/cccccc?text=Pocket+Knife",
    category: "utility",
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
        <img src="${knife.image}" alt="${knife.name}" class="knife-image">
      </div>
      <div class="knife-content">
        <h2 class="knife-title">${knife.name}</h2>
        <p class="knife-description">${knife.description}</p>
        <p class="knife-price">$${knife.price.toFixed(2)}</p>
        <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" class="buy-button">
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

