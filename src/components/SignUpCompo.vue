<template>
    <div id="sign-up-card">
        <p>Email</p>
        <input type="text" id="email-input" name="email-input">
        <p>Password</p>
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
    
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: auto;
    max-width: 50%;
    row-gap: 20px;
    column-gap: 10px;
    border: 4px solid black;
    border-radius: 15px;
    background-color: lightblue;
}
</style>