// set name for home section
const userName = "Jane";
document.getElementById('username').textContent = userName;

// get values from the message us from
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const dob     = document.getElementById("dob").value;
    const gender  = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    const currentTime = new Date().toString(); 

    const formattedDate = dob
        ? (() => {
            const [year, month, day] = dob.split("-");
            return `${day}/${month}/${year}`;
        })()
        : "-";

    const container = document.getElementById("information-container");
    container.innerHTML = `
        <div class="information-card">
            <div class="information-row">
                <span>Current Time</span>
                <span>${currentTime}</span>
            </div>
            <div class="information-row">
                <span>Name</span>
                <span>${name || "-"}</span>
            </div>
            <div class="information-row">
                <span>Email</span>
                <span>${email || "-"}</span>
            </div>
            <div class="information-row">
                <span>Date of Birth</span>
                <span>${formattedDate}</span>
            </div>
            <div class="information-row">
                <span>Gender</span>
                <span>${gender ? gender.value : "-"}</span>
            </div>
            <div class="information-row">
                <span>Message</span>
                <span>${message || "-"}</span>
            </div>
        </div>
    `;
});