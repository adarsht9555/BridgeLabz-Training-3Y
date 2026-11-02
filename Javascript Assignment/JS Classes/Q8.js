let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const htmlContentQ8 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Q8 - Dynamic Object Updater</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .form-group { margin-bottom: 10px; }
        label { display: inline-block; width: 80px; }
        input { padding: 5px; width: 200px; }
        .output-box { margin-top: 20px; padding: 10px; border: 1px solid #ccc; background: #f9f9f9; }
    </style>
</head>
<body>
    <h2>Edit User Details</h2>
    <form id="userForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" value="${user.name}">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" value="${user.email}">
        </div>
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" value="${user.age}">
        </div>
        <button type="submit">Update Object</button>
    </form>

    <div class="output-box">
        <h3>Updated User Object:</h3>
        <pre id="objectDisplay"></pre>
    </div>

    <script>
        let user = { name: "John", email: "john@mail.com", age: 21 };

        function updateDisplay() {
            document.getElementById('objectDisplay').textContent = JSON.stringify(user, null, 2);
        }

        updateDisplay();

        document.getElementById('userForm').addEventListener('submit', function(e) {
            e.preventDefault();
            user.name = document.getElementById('name').value;
            user.email = document.getElementById('email').value;
            user.age = parseInt(document.getElementById('age').value, 10);
            updateDisplay();
        });
    </script>
</body>
</html>
`;
console.log("Q8 loaded.");
