<template>
    <h>This is a post</h>
    <p>{{ content }}</p>
</template>

<script>
export default {
    name: 'Post',
    props: {
        content: String;
    }
}
</script>

<style scoped>
h {
    color: red;
}
</style>