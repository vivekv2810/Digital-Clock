function updateClock() {
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");
    const ampmEl = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";

    // Convert 24-hour to 12-hour format
    h = h % 12;
    h = h ? h : 12;  // If h = 0, change to 12

    // Add leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update time values
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // Update every second
    setTimeout(updateClock, 1000);
}

// Initialize clock
updateClock();