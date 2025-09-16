// reviews.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, orderBy } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDGcSb963EfVyYxMcU-gC5FoY8Bx79a0ww",
  authDomain: "pakhlay-reviews.firebaseapp.com",
  projectId: "pakhlay-reviews",
  storageBucket: "pakhlay-reviews.firebasestorage.app",
  messagingSenderId: "223818326820",
  appId: "1:223818326820:web:2fea8949cb8daf550509b1",
  measurementId: "G-VSW4FYQ3ED"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Submit review
document.getElementById("submitComment").addEventListener("click", async () => {
  let commentBox = document.getElementById("clientComment");
  let commentText = commentBox.value.trim();

  let userName = prompt("Enter your name:", "Anonymous");

  if (commentText) {
    try {
      await addDoc(collection(db, "reviews"), {
        name: userName || "Anonymous",
        text: commentText,
        createdAt: serverTimestamp()
      });

      commentBox.value = "";
      loadReviews(); // refresh
    } catch (e) {
      console.error("Error adding review: ", e);
    }
  } else {
    alert("Please write a comment before submitting!");
  }
});

// ✅ Load reviews
async function loadReviews() {
  let reviewsTable = document.getElementById("reviewsTable");
  if (!reviewsTable) return; // safety check

  reviewsTable.innerHTML = "";

  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    let date = data.createdAt?.toDate().toLocaleDateString() || "—";

    let row = `
      <tr>
        <td><strong>${data.name}</strong></td>
        <td>${data.text}</td>
        <td>${date}</td>
      </tr>
    `;
    reviewsTable.innerHTML += row;
  });
}

// ✅ Run when page loads
window.onload = loadReviews;

// https://console.firebase.google.com/u/0/project/pakhlay-reviews/firestore/databases/-default-/data/~2Freviews~2FhKDhQfrDR5Br2VjYDSdh
// Firbase table link