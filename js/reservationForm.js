// js/reservationForm.js
export function setupReservationForm() {
  const dishes = {
    fastfood: [
      "Zinger Burger",
      "Shawarma",
      "Roll Paratha",
      "Sandwich",
      "Fries",
      "Crispy Chicken",
      "Quarter Broast",
      "Veg Cheese Sandwich"
    ],
    rice: [
      "Chicken Biryani",
      "Beef Pulao",
      "Mutton Yahni Pulao",
      "Sindhi Biryani",
      "Chicken Fried Rice",
      "Chana Pulao",
      "Vegetable Pulao",
      "Brown Rice + Grilled Chicken"
    ],
    karahi: [
      "Chicken Karahi",
      "Boneless Chicken Handi",
      "Chicken Qorma",
      "Aloo Qeema",
      "Daal Tarka + Roti ",
      "Chana Masala + Roti",
      "Palak Paneer",
      "Mix Sabzi"
    ]
  };

  const categorySelect = document.getElementById("category");
  const dishSelect = document.getElementById("dish");
  const form = document.getElementById("reservationForm");

  if (!categorySelect || !dishSelect || !form) return;

  // Update dishes dropdown when category changes
  categorySelect.addEventListener("change", function () {
    let category = this.value;

    // Reset dishes
    dishSelect.innerHTML = '<option value="">Select Dish</option>';

    if (category && dishes[category]) {
      dishes[category].forEach((dish) => {
        let option = document.createElement("option");
        option.value = dish;
        option.text = dish;
        dishSelect.appendChild(option);
      });

      // Add "On-Demand Dish" option
      let option = document.createElement("option");
      option.value = "On-Demand Dish";
      option.text = "On-Demand Dish";
      dishSelect.appendChild(option);
    }
  });

  // Handle form submit → open WhatsApp
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let category =
      categorySelect.options[categorySelect.selectedIndex].text;
    let dish = dishSelect.value;
    let people = document.getElementById("people").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "923119189778"; // your WhatsApp number

    let text = `Hello Pakhlay,
I would like to book a lunch.
Name: ${name}
Email: ${email}
Category: ${category}
Dish: ${dish}
People: ${people}
Special Request: ${message}`;

    let url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank").focus();
  });
}
