const registerForm = document.getElementById('registerForm');
const messageDisplay = document.getElementById('message');

registerForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            messageDisplay.textContent = "Регистрация прошла успешно!";
            messageDisplay.style.color = "green";
            registerForm.reset();
        } else {
            const errorData = await response.json();
            messageDisplay.textContent = "Ошибка: " + (errorData.message || "не удалось создать аккаунт");
            messageDisplay.style.color = "red";
        }
    } catch (error) {
        messageDisplay.textContent = "Ошибка соединения с сервером";
        messageDisplay.style.color = "red";
    }
});