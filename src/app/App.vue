<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
        <feedback-component v-if="showFeedback"></feedback-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from './Components/Header/Header';
    import Footer from './Components/Footer/Footer';
    import Feedback from './Components/Feedback/Feedback';
    export default {
        name: 'App',
        data() {
            return {
                page: {
                    name: null
                },
                showFeedback: false
            };
        },
        components: {
            'header-component': Header,
            'footer-component': Footer,
            'feedback-component': Feedback
        },
        methods: {
            getPageName() {
                this.page.name = this.$router.currentRoute.name;
                if (this.page.name === 'Main') this.showFeedback = false;
                else this.showFeedback = true;
            }
        },
        created() {
            this.getPageName();
        },
        watch: {
            $route(to, from) {
                this.getPageName();
            }
        },
    };

</script>
