// JavaScript for the Shopping Cart Page
document.getElementById('calculateBtn').addEventListener('click', function () {
    const carSelect = document.getElementById('car');
    const daysInput = document.getElementById('days');
    const vatField = document.getElementById('vat');
    const subtotalField = document.getElementById('subtotal');
    const totalField = document.getElementById('total');

    const selectedCar = carSelect.options[carSelect.selectedIndex];
    const pricePerDay = parseFloat(selectedCar.getAttribute('data-price'));
    const numberOfDays = parseInt(daysInput.value, 10);

    if (isNaN(pricePerDay) || isNaN(numberOfDays) || numberOfDays <= 0) {
        alert('Please select a valid car and number of days.');
        return;
    }

    // Calculations
    const subtotal = pricePerDay * numberOfDays;
    const vat = subtotal * 0.15; // 15% VAT
    const grandTotal = subtotal + vat;

    // Display results
    subtotalField.value = `$${subtotal.toFixed(2)}`;
    vatField.value = `$${vat.toFixed(2)}`;
    totalField.value = `$${grandTotal.toFixed(2)}`;
});

// JavaScript for Form Validation (Contact Page)
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('All fields are required. Please fill out the form completely.');
                e.preventDefault();
            } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault();
            }
        });
    }
});
