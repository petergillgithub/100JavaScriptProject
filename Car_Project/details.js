// 1. URL se id padho (parchi)

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find((c) => c.id === id);

const detailsEl = document.querySelector(".detailsContainer");

if (car) {
  document.title = car.brand;
  detailsEl.innerHTML = `
    <a href="index.html">← Back to cars</a>
    <img src="${car.image}" alt="${car.brand}" class="detailsImage" />
    <h1>${car.brand}</h1>
    <p>Model: ${car.model}</p>
    <p>Price: $${car.price.toLocaleString()}</p>
    <p>Fuel: ${car.fuel}</p>
    <p>Color: ${car.color}</p>
  `;
} else {
  detailsEl.innerHTML = `
    <p>Car not found</p>
    <a href="index.html">← Back to cars</a>
  `;
}
