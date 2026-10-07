/* ============================================================
     2. FAVOURITES DATA
     localStorage se pehle se saved favourite car-IDs nikalte hain.
     Agar pehli baar hai (kuch saved nahi), to khali array [] use karte hain.
     ============================================================ */
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

/* ============================================================
     3. DOM ELEMENTS
     HTML ke elements ko yaha ek baar select karke variable mein rakha hai,
     taaki baar-baar querySelector likhna na pade.
     ============================================================ */
const carContainerEl = document.querySelector(".carContainer");
const searchInputEl = document.querySelector(".searchInput");
const sortLowHighBtn = document.querySelector(".sortLowHigh");
const sortHighLowBtn = document.querySelector(".sortHighLow");

/* ============================================================
     4. RENDER FUNCTION
     Jo bhi array isko diya jaye (saari cars, filtered cars, sorted cars),
     ye uske hisaab se cards bana ke screen par dikha deta hai.
     ============================================================ */
function renderCars(carArray) {
  // Pehle purane cards hatao, taaki naye purano ke upar na chipke
  carContainerEl.innerHTML = "";

  carArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = item.id;

    // Ye car pehle se favourite hai kya? (heart icon decide karne ke liye)
    const isfavourite = favourites.includes(item.id);

    // Card ke andar ka poora HTML — image, naam, model, price, specs, favourite button
    card.innerHTML = `
        <img src="${item.image}" alt="${item.brand} ${
      item.model
    }" class="carImage" />
        <h3>${item.brand}</h3>
        <p class="model">Model: ${item.model}</p>
        <p class="price">$${item.price.toLocaleString()}</p>
        <p class="specs">${item.fuel} • ${item.color}</p>
        <button class="favBtn" data-id="${item.id}">${
      isfavourite ? "🩷" : "🤍"
    }</button>
      `;

    carContainerEl.appendChild(card);
  });
}

// Page load hote hi, saari cars pehli baar dikha do
renderCars(cars);

/* ============================================================
     5. FAVOURITE BUTTON — CLICK HANDLING (Event Delegation)
     Har heart button pe alag listener lagane ke bajaye,
     poore "carContainerEl" par SIRF EK BAAR listener lagaya hai.
     Jab bhi kisi bhi heart button par click ho, ye pakad leta hai
     (kyunki click "bubble" hoke container tak pahuchta hai).
     ============================================================ */
carContainerEl.addEventListener("click", (e) => {
  // Check karo ki click exactly heart button (".favBtn") par hua ya nahi
  if (e.target.classList.contains("favBtn")) {
    // Button ke "data-id" attribute se us car ki ID nikalo (string se number banaya)
    const carId = Number(e.target.dataset.id);

    if (favourites.includes(carId)) {
      // Pehle se favourite hai → favourites array se HATAO
      favourites = favourites.filter((id) => id !== carId);
    } else {
      // Favourite nahi hai → favourites array mein ADD karo
      favourites.push(carId);
    }

    // Updated favourites list ko localStorage mein save karo
    localStorage.setItem("favourites", JSON.stringify(favourites));

    // Dobara render karo, taaki heart icon turant badal jaye (🤍 ↔ 🩷)
    renderCars(cars);
    return;
  }
  //Car card find karo
  const card = e.target.closest(".card");

  if (card) {
    const cardId = card.dataset.id;

    window.location.href = `car-details.html?id=${cardId}`;
  }
});

/* ============================================================
     6. SEARCH
     Jab bhi user search box mein kuch type kare, "input" event fire hota hai.
     ============================================================ */
searchInputEl.addEventListener("input", () => {
  // "cars" (poori list) ko filter karo — sirf wahi cars rakho jinka
  // brand, user ke typed text se match ho (case-insensitive)
  const filteredCars = cars.filter((item) => {
    return item.brand.toLowerCase().includes(searchInputEl.value.toLowerCase());
  });

  // Filtered (chhani hui) list ko render karo
  renderCars(filteredCars);
});

/* ============================================================
     7. SORT — Price ke hisaab se
     ============================================================ */

// "Low to High" button — sabse sasti car sabse pehle
sortLowHighBtn.addEventListener("click", () => {
  cars.sort((a, b) => a.price - b.price);
  renderCars(cars);
});

// "High to Low" button — sabse mehngi car sabse pehle
sortHighLowBtn.addEventListener("click", () => {
  cars.sort((a, b) => b.price - a.price);
  renderCars(cars);
});
