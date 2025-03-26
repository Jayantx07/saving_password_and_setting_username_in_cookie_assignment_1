// Function to get a cookie by name
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
      let [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) return cookieValue;
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Initialize or update the count cookie
function updateCount() {
  let count = parseInt(getCookie("pageCount")) || 0;
  count++;
  setCookie("pageCount", count, 7); // Expires in 7 days
  document.getElementById("count").textContent = count;
}

// Call updateCount when page loads
document.addEventListener("DOMContentLoaded", updateCount);
