document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        FirstName: this.FirstName.value,
        LastName: this.LastName.value,
        JobTitle: this.JobTitle.value,
        CompanyName: this.CompanyName.value,
        Email: this.Email.value,
        CountryCode: this.CountryCode.value,
        Phone: this.Phone.value,
        Event: Array.from(document.querySelectorAll('input[name="Event"]:checked'))
                    .map(e => e.value).join(', '),
        Consent: this.Consent.checked ? 'Yes' : 'No'
    };

    fetch("https://script.google.com/macros/s/AKfycbyqtX75MYitTWN0dqUmuUXGS7DKtgjfiUdTN-FBVrHcmptZ6WyZAC-4r0W9SalRRs-bJQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(() => {
        alert("Form submitted successfully!");
        this.reset();
    }).catch(err => {
        console.error(err);
        alert("Error submitting the form.");
    });
});