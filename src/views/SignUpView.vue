<template>
    <div>
        <HeaderComponent />
        <SignUpCard />
    </div>
    <FooterComponent />
</template>

<script>
import SignUpCard from '@/components/SignUpCompo.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'SignUpView',
    components: {
        SignUpCard,
        FooterComponent,
        HeaderComponent
    }
}
</script>