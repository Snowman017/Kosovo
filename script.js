const trackingData = {
    "KTG67842900": {
      name: "John Doe",
      content: "Personal gifts",
      status: "In Transit",
      destination: "Lagos, Nigeria"
    },
    "TRK987654": {
      name: "Jane Smith",
      content: "Personal gifts",
      status: "Delivered",
      destination: "Abuja, Nigeria"
    }
  };
  
  function trackOrder() {
    const input = document.getElementById("trackingInput").value.trim();
    const error = document.getElementById("error");
  
    // Check if tracking number exists
    if (!trackingData[input]) {
      error.textContent = "❌ Invalid tracking number";
      return;
    }
  
    // If valid → go to details page
    localStorage.setItem("trackingNumber", input);
    window.location.href = "details.html";
  }