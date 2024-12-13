<template>
    <div>
        <HeaderComponent />
        <LogInCard />
    </div>
    <FooterComponent />
</template>

<script>
import LogInCard from '@/components/LogInCompo.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'LogInView',
    components: {
        LogInCard,
        FooterComponent,
        HeaderComponent
    }
}
</script>