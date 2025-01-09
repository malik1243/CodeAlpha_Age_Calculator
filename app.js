document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dateInput = document.getElementById("date").value;

    if (!dateInput) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        return;
    }

    const dob = new Date(dateInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerText = `Your age is: ${age} years`;
});
