const firebaseConfig = {
  apiKey: "AIzaSyCUD9G-f6AaiOsXUQgSTJjJgAEKv-Ufg2c",
  authDomain: "birthday-wishlist-2e589.firebaseapp.com",
  projectId: "birthday-wishlist-2e589",
  storageBucket: "birthday-wishlist-2e589.firebasestorage.app",
  messagingSenderId: "455470060714",
  appId: "1:455470060714:web:1ebbf582a8c1a76840ecd3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const books = [
  { author: "Elizabeth Helen", title: "Bonded By Thorns", number: "Book 1", takealot: "https://www.takealot.com/bonded-by-thorns/PLID96719815", readersWarehouse: "-", exclusiveBooks: "" },
  { author: "Elizabeth Helen", title: "Prince of The Arena", number: "Book 1,5", takealot: "https://www.takealot.com/prince-of-the-arena/PLID98086849", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Elizabeth Helen", title: "Woven by Gold", number: "Book 2", takealot: "https://www.takealot.com/woven-by-gold/PLID96716867", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Elizabeth Helen", title: "Forged By Malice", number: "Book 3", takealot: "https://www.takealot.com/forged-by-malice/PLID96708888", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Elizabeth Helen", title: "Broken by Daylight", number: "Book 4", takealot: "https://www.takealot.com/broken-by-daylight/PLID96721844", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Elizabeth Helen", title: "Frozen by Stardust", number: "Book 5", takealot: "https://www.takealot.com/frozen-by-stardust/PLID98360934", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Callie Hart", title: "Brimstone", number: "Book 2", takealot: "https://www.takealot.com/brimstone/PLID96825781", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781399745482?_pos=1&_sid=d52fa2acc&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781399745482?_pos=21&_sid=9c77d3313&_ss=r" },
  { author: "Rachel Gillig", title: "Two Twisted Crowns", number: "Book 2", takealot: "https://www.takealot.com/two-crooked-alders/PLID91702298", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Carissa Broadbent", title: "Six Scorched Roses", number: "Book 1,5", takealot: "https://www.takealot.com/six-scorched-roses/PLID98179257", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781035051779?_pos=35&_sid=0eda75481&_ss=r" },
  { author: "Carissa Broadbent", title: "The Ashes & the Star-Cursed King", number: "Book 2", takealot: "https://www.takealot.com/the-ashes-and-the-star-cursed-king/PLID94686694", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781035040988?_pos=39&_sid=0eda75481&_ss=r" },
  { author: "Carissa Broadbent", title: "Slaying the Vampire Conqueror", number: "Book 2,5", takealot: "https://www.takealot.com/slaying-the-vampire-conqueror/PLID94936032", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781035051748?_pos=14&_sid=df519f858&_ss=r", exclusiveBooks: "-" },
  { author: "Carissa Broadbent", title: "The Songbird & the Heart of Stone", number: "Book 3", takealot: "https://www.takealot.com/the-songbird-and-the-heart-of-stone/PLID96741588", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781035050727?_pos=4&_sid=df519f858&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781035050734?_pos=25&_sid=0eda75481&_ss=r" },
  { author: "Carissa Broadbent", title: "The Fallen & the Kiss of Dusk", number: "Book 4", takealot: "https://www.takealot.com/the-fallen-and-the-kiss-of-dusk/PLID96823056", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Stephanie Garber", title: "Legendary", number: "Book 2", takealot: "https://www.takealot.com/legendary-a-caraval-novel/PLID52837413", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781399633802?_pos=18&_sid=6986ba418&_ss=r" },
  { author: "Stephanie Garber", title: "Finale", number: "Book 3", takealot: "https://www.takealot.com/finale-a-caraval-novel/PLID55284911", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781399633833?_pos=26&_sid=6986ba418&_ss=r" },
  { author: "Stephanie Garber", title: "Spectacular", number: "Book 4", takealot: "https://www.takealot.com/spectacular-a-caraval-holiday-novella/PLID95513608", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Alex Astor", title: "Nightbane", number: "Book 2", takealot: "https://www.takealot.com/nightbane-the-lightlark-saga-book-2/PLID92655302", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781419760914?_pos=14&_sid=83429092e&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781419760914?_pos=13&_sid=301e74839&_ss=r" },
  { author: "Alex Astor", title: "Skyshade", number: "Book 3", takealot: "https://www.takealot.com/skyshade-the-lightlark-saga-book-3/PLID97242567", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Rina Kent", title: "Kiss the Villain", number: "Book 1", takealot: "https://www.takealot.com/kiss-the-villain/PLID97274836", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781911746133?_pos=2&_sid=d1da3241d&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781911746133?_pos=3&_sid=5e9c7ca19&_ss=r" },
  { author: "Rina Kent", title: "Hunt the Villain", number: "Book 2", takealot: "https://www.takealot.com/hunt-the-villain/PLID97970278", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781911746140?_pos=31&_sid=5e9c7ca19&_ss=r" },
  { author: "Raven Kennedy", title: "Gild", number: "Book 1", takealot: "https://www.takealot.com/gild/PLID90539956", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405955003?_pos=17&_sid=bff0107a3&_ss=r" },
  { author: "Raven Kennedy", title: "Glint", number: "Book 2", takealot: "https://www.takealot.com/glint/PLID90539920", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405955041?_pos=3&_sid=bef7350b1&_ss=r&_fid=79e651cd9" },
  { author: "Raven Kennedy", title: "Gleam", number: "Book 3", takealot: "https://www.takealot.com/gleam/PLID90539061", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405955027?_pos=4&_sid=b7a898cbf&_ss=r&_fid=6556176fe" },
  { author: "Raven Kennedy", title: "Glow", number: "Book 4", takealot: "https://www.takealot.com/glow/PLID92279641", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405955065?_pos=7&_sid=308d161c2&_ss=r&_fid=756d8fa97" },
  { author: "Raven Kennedy", title: "Gold", number: "Book 5", takealot: "https://www.takealot.com/gold/PLID94167364", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405966689?_pos=21&_sid=2ebff603e&_ss=r&_fid=406a36ed0" },
  { author: "Raven Kennedy", title: "Goldfinch", number: "Book 6", takealot: "https://www.takealot.com/goldfinch/PLID96014426", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781405966641?_pos=19&_sid=2ebff603e&_ss=r&_fid=406a36ed0" },
  { author: "Sarah A. Parker", title: "The Ballad of Falling Dragons", number: "Book 2", takealot: "https://www.takealot.com/the-ballad-of-falling-dragons/PLID96199892", readersWarehouse: "-", exclusiveBooks: "-" },
  { author: "Kaylie Smith", title: "Phantasma", number: "Book 1", takealot: "https://www.takealot.com/phantasma/PLID95984436", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781836182160?_pos=1&_sid=96fa14256&_ss=r" },
  { author: "Kaylie Smith", title: "Enchantra", number: "Book 2", takealot: "https://www.takealot.com/enchantra/PLID95988809", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781836182559?_pos=8&_sid=96fa14256&_ss=r" },
  { author: "Navessa Allen", title: "Lights Out", number: "Book 1", takealot: "https://www.takealot.com/lights-out/PLID95750965", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781529442397?_pos=2&_sid=2aa2bd2e2&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781529442397?_pos=13&_sid=383d87f05&_ss=r" },
  { author: "Navessa Allen", title: "Caught Up", number: "Book 2", takealot: "https://www.takealot.com/caught-up/PLID95758658", readersWarehouse: "https://www.readerswarehouse.co.za/products/9781529442427?_pos=1&_sid=2aa2bd2e2&_ss=r", exclusiveBooks: "https://exclusivebooks.co.za/products/9781529442427?_pos=3&_sid=383d87f05&_ss=r" },
  { author: "Navessa Allen", title: "Game On", number: "Book 3", takealot: "https://www.takealot.com/game-on/PLID98041495", readersWarehouse: "-", exclusiveBooks: "https://exclusivebooks.co.za/products/9781529442458?_pos=1&_sid=383d87f05&_ss=r" }
];

// Turn "Author + Title + Number" into a safe, stable Firebase key
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
books.forEach(b => { b.id = slugify(`${b.author}-${b.title}-${b.number}`); });


function linkCell(url) {
  if (!url || url === "-") return "-";
  return `<a href="${url}" target="_blank" rel="noopener">Buy</a>`;
}

function render() {
  let html = "<table style='width:100%; border-collapse: collapse;'><tr>";
  ["Author", "Book Name", "Book Number", "Takealot", "Readers Warehouse", "Exclusive Books", "Purchased"]
    .forEach(h => { html += `<th style="border: 1px solid #f3eeee; padding: 10px; background-color: #000000; color: white;">${h}</th>`; });
  html += "</tr>";

  books.forEach(b => {
    html += `<tr>
      <td style="border: 1px solid rgb(255, 248, 248); padding: 10px; text-align: center; color: #ffffff;">${b.author}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center; color: #ffffff;">${b.title}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center; color: #ffffff;">${b.number}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center;">${linkCell(b.takealot)}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center;">${linkCell(b.readersWarehouse)}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center;">${linkCell(b.exclusiveBooks)}</td>
      <td style="border: 1px solid #ffffff; padding: 10px; text-align: center;">
        <input type="checkbox" class="purchased-checkbox" data-id="${b.id}" />
      </td>
    </tr>`;
  });

  html += "</table>";
  document.getElementById("wishlist-table").innerHTML = html;
  attachCheckboxListeners();
}


function attachCheckboxListeners() {
  document.querySelectorAll(".purchased-checkbox").forEach(box => {
    const id = box.dataset.id;

    // Live updates: reflects taps from any other visitor immediately
    db.ref("purchased/" + id).on("value", snapshot => {
      const purchased = snapshot.val() === true;
      box.checked = purchased;
      box.disabled = purchased;
    });

    box.addEventListener("change", function () {
      if (!this.checked) return; // rules don't allow un-checking anyway
      this.disabled = true;
      db.ref("purchased/" + id).set(true).catch(() => {
        alert("Couldn't save that — check your connection and try again.");
        this.disabled = false;
        this.checked = false;
      });
    });
  });
}

render();
