export function setupReservationForm() {
  // Menu data organized by week
  const menus = {
    lunch: {
      week1: ["Homestyle Chicken Qorma", "Pulao (Veg or Channa) +Shami kabab", "Sabzi (Mix/seasonal) + Shami Kabab", "Daal (Mash or channa or Shahi)", "Chicken Biryani/Chicken Pulao","Karhi Pakora/ Alu Qeema"],
      week2: ["Mix Daal with fried Fish/Chicken", "Daal/Daleem Chawal+Shami kabab", "Sabzi (Mix/seasonal) + Shami Kabab", "Traditional Egg Kofta Curry", "Chicken Biryani/Chicken Pulao", "Desi-style Red Lobia"],
      week3: ["Homestyle Chicken Qorma", "Pulao (Veg or Channa) +Shami kabab", "Sabzi (Mix/seasonal) + Shami Kabab", "Daal (Mash or channa or Shahi)", "Chicken Biryani/Chicken Pulao","Karhi Pakora/ Alu Qeema"],
      week4: ["Mix Daal with fried Fish/Chicken", "Daal/Daleem Chawal+Shami kabab", "Sabzi (Mix/seasonal) + Shami Kabab", "Traditional Egg Kofta Curry", "Chicken Biryani/Chicken Pulao", "Desi-style Red Lobia"]
    },
    dinner: {
      week1: ["Daal/Daleem Chawal + Shami kabab", "Chicken Biryani/Chicken Pulao", "Daal (Mash or channa or Shahi)", "Homestyle Chicken Qorma", "Desi-style Red Lobia", "Sabzi (Mix/seasonal) + Shami Kabab", "Karhi Pakora/ Alu Qeema"],
      week2: ["Sabzi (Mix/seasonal) + Shami Kabab", "Chicken Biryani/Chicken Pulao", "Daal/Daleem Chawal+Shami kabab", "Karhi Pakora/ Alu Qeema", "Homestyle Chicken Qorma", "Daal (Mash or channa or Shahi)", "Desi-style Red Lobia"],
      week3: ["Daal/Daleem Chawal + Shami kabab", "Chicken Biryani/Chicken Pulao", "Daal (Mash or channa or Shahi)", "Homestyle Chicken Qorma", "Desi-style Red Lobia", "Sabzi (Mix/seasonal) + Shami Kabab", "Karhi Pakora/ Alu Qeema"],
      week4: ["Sabzi (Mix/seasonal) + Shami Kabab", "Chicken Biryani/Chicken Pulao", "Daal/Daleem Chawal+Shami kabab", "Karhi Pakora/ Alu Qeema", "Homestyle Chicken Qorma", "Daal (Mash or channa or Shahi)", "Desi-style Red Lobia"]
    },
    meals: {
      default: [
        "Chicken Karhai (Full) — Rs. 1800",
        "Chicken White Karhai (Full) — Rs. 1900",
        "Chapli Kabab (1 Kg) — Rs. 1800",
        "Kabuli Pulao (Per Serving) — Rs. 650",
        "Chicken Biryani (Per Serving) — Rs. 360"
      ]
    }
  };

  const categorySelect = document.getElementById("category");
  const weekContainer = document.getElementById("week-container");
  const weekSelect = document.getElementById("week");
  const dishSelect = document.getElementById("dish");
  const form = document.getElementById("reservationForm");

  if (!categorySelect || !dishSelect || !form) return;

  // Handle category change
  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;

    // Show week dropdown for lunch/dinner only
    if (category === "lunch" || category === "dinner") {
      weekContainer.style.display = "block";
      dishSelect.innerHTML = '<option value="">Select Dish</option>';
    } else {
      weekContainer.style.display = "none";
      loadDishes("meals", "default");
    }
  });

  // Handle week change
  weekSelect.addEventListener("change", () => {
    const category = categorySelect.value;
    const week = weekSelect.value;
    loadDishes(category, week);
  });

  // Load dishes into dropdown
  function loadDishes(category, week) {
    dishSelect.innerHTML = '<option value="">Select Dish</option>';
    if (menus[category] && menus[category][week]) {
      menus[category][week].forEach((dish) => {
        const option = document.createElement("option");
        option.value = dish;
        option.text = dish;
        dishSelect.appendChild(option);
      });
    }
  }

  // WhatsApp submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const category = categorySelect.options[categorySelect.selectedIndex].text;
    const week = weekSelect.value ? weekSelect.options[weekSelect.selectedIndex].text : "N/A";
    const dish = dishSelect.value;
    const people = document.getElementById("people").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "923199549958";
    const text = `Hello Pakhlay,
I would like to book a meal.
Name: ${name}
Email: ${email}
Category: ${category}
Week: ${week}
Dish: ${dish}
People: ${people}
Special Request: ${message}`;

    const url =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank").focus();
  });
}
