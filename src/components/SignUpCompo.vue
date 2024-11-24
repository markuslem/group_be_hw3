<template>
    <div id="sign-up-card">
        <!-- Text and password fields -->
        <div class="text-field-pair">
            <label>Email</label>
            <input type="text" id="email-input" name="email-input">
        </div>
        <div class="text-field-pair">
            <label>Password</label>
            <input type="password" id="password-input" name="password-input">
        </div>
        <!-- Sign up button -->
        <button>Sign Up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUpCard'
}
</script>

<style scoped>
#sign-up-card {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: auto;
    border-radius: 15px;
    background: linear-gradient(135deg, #4cbec2, #4368c7);
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.2);
    row-gap: 0.7em;

    padding: 1em;
    font-size: large;
}

.text-field-pair {
    display: flex;
    column-gap: 0.5em;
    align-items: center;
}

label {
    width: 75px;
    text-align: right;
}

input {
    padding: 0.5em;
    border: 2px solid rgb(161, 161, 161);
    border-radius: 5px;
}

input:focus {
    border-color: rgb(57, 77, 49);
    outline: none;
}

button {
    background-color: #8D919B;
    border-radius: 10px;
    font-size: larger;
}


button {
    background-color: #363f50c9;
    color: white;
    border: none;
    border-radius: 24px;
    padding: 0.7em 1.5em;
    font-size: larger;
    cursor: pointer;
    transition: background-color 0.7s ease, transform 0.3s ease;
}

button:hover {
    background-color: #1d2127c9;
    transform: translateY(-2px);
}

</style>