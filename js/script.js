document.addEventListener("DOMContentLoaded", function() {
    const markers = document.querySelectorAll(".marker");
    const locationDisplay = document.getElementById("location-display");

    markers.forEach(marker => {
        marker.addEventListener("mouseover", function() {
            const location = marker.getAttribute("data-location");
            locationDisplay.textContent = location;
            locationDisplay.style.display = "block";
            locationDisplay.style.top = (marker.offsetTop - 20) + "px";
            locationDisplay.style.left = (marker.offsetLeft + 15) + "px";
        });

        marker.addEventListener("mouseout", function() {
            locationDisplay.style.display = "none";
        });
    });
});
