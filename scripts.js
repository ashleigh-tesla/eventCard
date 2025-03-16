// document.getElementById("card-btn").addEventListener("click", () => {
//   alert(
//     "The G20 Summit in South Africa will feature a mesmerizing accordion ensemble, uniting world leaders through the universal language of music. \nCurated by the Ministry of Arts and Culture in collaboration with the Global Harmony Initiative, this one-of-a-kind performance will bring together master accordionists from G20 nations, weaving a rich tapestry of global musical traditions. \nSet against the vibrant backdrop of Johannesburg, the performance will include a powerful rendition of Nkosi Sikelel' iAfrika, seamlessly infused with folk melodies from around the world. \nThis evocative arrangement is set to be a summit highlight, with leaders expected to participate in a moment of cultural resonance. \nFrench President Élodie Marchand has called the initiative “diplomacy set to music.” \n The interlude will culminate in a symbolic exchange of handcrafted accordions among heads of state, a gesture underscoring the summit’s commitment to cultural dialogue, unity, and cooperation. \nThrough the power of music, the world will witness harmony in action—one note at a time."
//   );
// });

const startCountdown = (targetDate) => {
  function updateCountdown() {
    const now = new Date().getTime();
    const eventTime = new Date(targetDate).getTime();
    const timeLeft = eventTime - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "The Event Has Started!";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // Call immediately to prevent delay
  const timerInterval = setInterval(updateCountdown, 1000);
};

// Set the event date: November 22, 2025 (UTC time)
const eventDate = new Date("November 22, 2025 00:00:00").getTime();

let timerInterval = setInterval(() => {
  startCountdown(eventDate);
}, 1000);

const openLocation = () => {
  const latitude = -26.2041; // Johannesburg latitude
  const longitude = 28.0473; // Johannesburg longitude

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const geoUrl = `geo:${latitude},${longitude}`;

  // Check if the user is on a mobile device
  if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
    window.location.href = geoUrl; // Try opening in the default maps app
  } else {
    window.open(googleMapsUrl, "_blank"); // Open Google Maps in a new tab
  }
};

const toggleRSVP = () => {
  const rsvpStatus = document.getElementById("rsvp-status");
  if (rsvpStatus.classList.contains("not-going")) {
    rsvpStatus.classList.remove("not-going");
    rsvpStatus.classList.add("going");
    rsvpStatus.textContent = "Going";
  } else {
    rsvpStatus.classList.remove("going");
    rsvpStatus.classList.add("not-going");
    rsvpStatus.textContent = "Not Going";
  }
};

const checkScreenSize = () => {
  if (window.matchMedia("(max-width: 539px)").matches) {
    document.body.style.backgroundColor = "#00569f";
  } else if (
    window.matchMedia("(min-width: 540px) and (max-width: 1024px)").matches
  ) {
    document.body.style.backgroundColor = "#006637";
  } else {
    document.body.style.backgroundColor = "#e01b2c";
  }
};

// Run on page load
checkScreenSize();

// Listen for resize events
window.addEventListener("resize", checkScreenSize);

// Select elements
const openModalBtn = document.querySelector(".open-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal when clicking the close button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Prevent modal from closing when clicking outside it
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    e.stopPropagation(); // Prevent closing on overlay click
  }
});
