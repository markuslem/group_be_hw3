<template>
    <form id="sign-up-card" @submit.prevent="submitForm">
        <!-- Text and password fields -->
        <div class="text-field-pair">
            <label>Email</label>
            <input type="email" v-model="email" id="email-input" name="email-input" placeholder="email" required>
        </div>
        <div class="text-field-pair">
            <label>Password</label>
            <input type="password" v-model="password" id="password-input" name="password-input" placeholder="password"
                required>
        </div>

        <!-- Log in or sign up -->

        <div id="log-or-sign">
            <button @click="submitForm" >Log In</button>
            <p>Or</p>
            <button @click="directToSignUp">Sign Up</button>
        </div>

    </form>
</template>

<script>

export default {
    name: 'LogInCard',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        directToSignUp() {
            this.$router.push('/sign-up');
        },
        submitForm() {
            var data = {
                email: this.email,
                password: this.password
            };
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    location.assign("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });


        }
    }
};


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

#log-or-sign {
    display: flex;
    font-size: medium;
}

#log-or-sign p {
    margin-left: 0.7em;
    margin-right: 0.7em;
}


@media (max-width: 500px) {
    .text-field-pair {
        flex-direction: column;
    }

    #sign-up-card {
        min-width: 80%;
    }

    label {
        text-align: center;
    }
}
</style>