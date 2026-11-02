const htmlContentQ2 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Q2 - Student Form Validator</title>
    <style>
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { padding: 8px; width: 300px; border: 2px solid #ccc; border-radius: 4px; }
        input.valid { border-color: green; }
        input.invalid { border-color: red; }
        .error { color: red; font-size: 12px; display: none; margin-top: 3px; }
    </style>
</head>
<body>
    <h2>Student Registration Form</h2>
    <form id="studentForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" autocomplete="off">
            <div class="error" id="nameError">Name must contain alphabets only.</div>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" autocomplete="off">
            <div class="error" id="emailError">Invalid email format (e.g., example@domain.com).</div>
        </div>
        <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" autocomplete="off">
            <div class="error" id="phoneError">Phone number must be exactly 10 digits.</div>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password">
            <div class="error" id="passwordError">Must contain 1 uppercase, 1 number, and 1 special character.</div>
        </div>
        <button type="submit">Register</button>
    </form>

    <script>
        const patterns = {
            name: /^[A-Za-z\s]+$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            phone: /^\d{10}$/,
            password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/
        };

        function validateField(fieldId, regex) {
            const inputElement = document.getElementById(fieldId);
            const errorElement = document.getElementById(fieldId + 'Error');
            const value = inputElement.value.trim();

            if (regex.test(value)) {
                inputElement.className = 'valid';
                errorElement.style.display = 'none';
                return true;
            } else {
                inputElement.className = 'invalid';
                errorElement.style.display = 'block';
                return false;
            }
        }

        document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const isNameValid = validateField('name', patterns.name);
            const isEmailValid = validateField('email', patterns.email);
            const isPhoneValid = validateField('phone', patterns.phone);
            const isPasswordValid = validateField('password', patterns.password);

            if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
                alert('Registration Successful!');
            }
        });
    </script>
</body>
</html>
`;
console.log("Q2 loaded.");
