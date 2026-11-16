let orderCount = parseInt(sessionStorage.getItem("orderCount")) || 0;
let orderTotal = parseFloat(sessionStorage.getItem("orderTotal")) || 0;

function updateCartBadge() {
  const badge = document.getElementById("navCartCount");
  if (badge) {
    badge.textContent = orderCount;
  }
}

// Add dish to selection with refined confirmation alert
function placeOrder(dishName, price) {
  orderCount += 1;
  orderTotal += price;

  sessionStorage.setItem("orderCount", orderCount);
  sessionStorage.setItem("orderTotal", orderTotal.toFixed(2));
  updateCartBadge();

  alert(
    `Added to Your Evening Selection\n\nCourse: ${dishName} ($${price.toFixed(2)})\nSelected Courses: ${orderCount}\nEstimated Total: $${orderTotal.toFixed(2)}`
  );
}

// Generic alert handler for unlinked buttons
function showAlert(message) {
  alert(message);
}

// Review & confirm order selection
function checkoutAlert() {
  if (orderCount === 0) {
    alert("Your evening selection is currently empty. Explore La Carta to add courses.");
  } else {
    alert(
      `Osteria Aurelia — Order Summary\n\nCourses Selected: ${orderCount}\nTotal: $${orderTotal.toFixed(2)}\n\nYour selection has been sent to our culinary team.`
    );
    orderCount = 0;
    orderTotal = 0;
    sessionStorage.setItem("orderCount", 0);
    sessionStorage.setItem("orderTotal", "0.00");
    updateCartBadge();
  }
}

// Category filter on Menu page
function filterMenu(category, clickedTab) {
  const items = document.querySelectorAll(".menu-item");
  const tabs = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => tab.classList.remove("active"));
  clickedTab.classList.add("active");

  items.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Reservation form handler
const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("guestName").value;
    const date = document.getElementById("resDate").value;
    const guests = document.getElementById("guestCount").value;

    alert(
      `Table Reserved — Osteria Aurelia\n\nGuest: ${name}\nParty: ${guests}\nDate: ${date}\n\nWe look forward to hosting you.`
    );
    reservationForm.reset();
  });
}

updateCartBadge();