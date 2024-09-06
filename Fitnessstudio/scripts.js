// Dynamischer Kursplan
const scheduleData = [
    { day: 'Montag', course: 'Kickboxen Anfänger', trainer: 'Max Mustermann', time: '18:00 - 19:00' },
    { day: 'Dienstag', course: 'Karate Fortgeschritten', trainer: 'Lisa Müller', time: '19:00 - 20:00' },
    { day: 'Mittwoch', course: 'Jiu-Jitsu Einführung', trainer: 'Thomas Schmidt', time: '17:00 - 18:30' },
];

window.onload = function() {
    const tableBody = document.getElementById('schedule-table-body');
    scheduleData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>${entry.course}</td>
            <td>${entry.trainer}</td>
            <td>${entry.time}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Countdown Timer
const eventDate = new Date("Sep 30, 2024 15:00:00").getTime();
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Das Event hat begonnen!";
    }
}, 1000);

// Kontaktformular-Validierung
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }

    // Hier könnte der Formularinhalt mit einem Dienst wie Formspree versendet werden
    alert('Danke für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Dark Mode Initialisierung
window.onload = function() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};

