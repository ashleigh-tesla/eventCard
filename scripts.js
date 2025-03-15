document.getElementById("card-btn").addEventListener("click", function () {
  alert(
    "The 2025 G20 Johannesburg Summit, scheduled for November 22–23, 2025, will be the first G20 summit held on the African continent. Under the theme 'Solidarity, Equality, Sustainability,' South Africa aims to prioritize inclusive economic growth, food security, and leveraging artificial intelligence for sustainable development. Additionally, the presidency will focus on climate finance for countries affected by climate-related disasters and provide debt relief to developing nations!"
  );
});

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
