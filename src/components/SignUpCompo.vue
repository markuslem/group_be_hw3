<template>
    <form id="sign-up-card" @submit.prevent="submitForm">
        <!-- Text and password fields -->
        <div class="text-field-pair">
            <label>Email</label>
            <input type="email" v-model="email" id="email-input" name="email-input" placeholder="email" required>
        </div>
        <div class="text-field-pair">
            <label>Password</label>
            <input type="password" v-model="password" id="password-input" name="password-input"
                placeholder="password" required>
        </div>
        <!-- Sign up button -->
        <button type="submit">Sign Up</button>

        <!-- Every passwordError displayed -->
        <div style="color: rgb(137, 20, 0);" v-if="passwordErrors.length > 0">
            <p>Password is not valid:</p>
            <p style="font-size: medium;" v-for="error in passwordErrors" :key="error">{{ error }}</p>
        </div>
    </form>
</template>

<script>

export default {
    name: 'SignUpCard',
    data() {
        return {
            email: '',
            password: '',
            passwordErrors: []
        };
    },
    methods: {
        submitForm() {
            this.passwordErrors = validatePassword(this.password);
            if (this.passwordErrors.length === 0) {
                this.$router.push({ name: "home" });
            }
        }
    }
};


function validatePassword(password) {
    var unsatisfied = [];
    if (password.length < 8 || password.length > 14) {
        unsatisfied.push("Length should be at least 8 chars and less than 15 chars!");
    }
    if (!/[A-Z]/.test(password)) {
        unsatisfied.push("Must include at least one uppercase alphabet character!");
    }

    // 2 lowercase chars
    var lowerCaseChars = password.match(/[a-z]/g);
    if (lowerCaseChars === null || lowerCaseChars.length < 2) {
        unsatisfied.push("Must include at least two lowercase alphabet characters!");
    }

    if (!/[0-9]/.test(password)) {
        unsatisfied.push("Must include at least one numeric value!");
    }

    if (!/^[A-Z]/.test(password)) {
        unsatisfied.push("Password should start with an uppercase alphabet!");
    }

    if (!/_/.test(password)) {
        unsatisfied.push("Password should include the character “_”");
    }

    return unsatisfied;
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