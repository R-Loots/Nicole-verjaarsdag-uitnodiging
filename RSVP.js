const firebaseConfig = {
  apiKey: "AIzaSyDDoDq6Zlt63_b6NiIUCykC3NWUVdnhfSc",
  authDomain: "birthday-rsvp-c8b77.firebaseapp.com",
  databaseURL: "https://birthday-rsvp-c8b77-default-rtdb.firebaseio.com",
  projectId: "birthday-rsvp-c8b77",
  storageBucket: "birthday-rsvp-c8b77.firebasestorage.app",
  messagingSenderId: "869637493588",
  appId: "1:869637493588:web:49d006e772ab6356262ec1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let guests = [
    { name: "" }
];
const guestListDiv = document.getElementById("guest-list");

function renderGuests() {
    guestListDiv.innerHTML = guests.map(function (guest, index) {
        return `
            <div class="guest-row">
                <input type="text" placeholder="Full Name" class="guest-name" data-index="${index}" value="${guest.name}">
            </div>
        `;
    }).join("");
}
renderGuests();

const addPersonBtn = document.getElementById("add-person-btn");
addPersonBtn.addEventListener("click", function () {
    guests.push({ name: "" });
    renderGuests();
});

guestListDiv.addEventListener("input", function (event) {
    const index = event.target.dataset.index;
    const newValue = event.target.value;
    guests[index].name = newValue;
});

const rsvpForm = document.getElementById("rsvp-form");
rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const hasEmptyName = guests.some(function (guest) {
        return guest.name.trim() === "";
    });

    if (hasEmptyName) {
        alert("Please make sure every guest has a name before submitting.");
        return;
    }

    db.ref("rsvps").push(guests)
        .then(function () {
            alert("Thanks! Your RSVP has been submitted.");
            guests = [{ name: "" }];
            renderGuests();
        })
        .catch(function (error) {
            alert("Something went wrong — please try again.");
            console.log(error);
        });
});