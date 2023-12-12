<template>
    <nav>
        <h2>MERT ULAS<span>Software Developer</span></h2>
        <ul v-if="route.path !== '/'" :class="{ 'nav-menu': true, 'responsive-nav-menu': navbarToggler }">
            <li
                v-for="(menuItem, index) in menu"
                :key="menuItem.title"
                @click="() => router.push(menuItem.path)"> <span>0{{ index + 1 }}</span>. {{ menuItem.title }}</li>
        </ul>
        <ul class="navbar-responsive-toggler" @click="() => navbarToggle()">
            <li v-for="(_, index) of Array(3)" :key="index"></li>
        </ul>
        <SocialMediaSet />
    </nav>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import SocialMediaSet from './SocialMediaSet.vue';

    const navbarToggler = ref(false);

    function navbarToggle() {
        navbarToggler.value = !navbarToggler.value;
    }

    const router = useRouter();
    const route = useRoute();

    const menu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Projects',
            path: '/projects'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]

</script>
<style scoped>
    nav {
        /* font-family: 'VT323', monospace; */
        padding: 50px;
        color: #B79492;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav h2 {
        font-size: 3vh;
        line-height: 1;
    }

    nav span {
        line-height: 1;
        font-size: 1.5vh;
        margin-left: 20px;
    }

    nav ul {
        display: flex;
        gap: 40px;
        font-size: 2vh;
        z-index: 6;
    }

    nav ul:not(.navbar-responsive-toggler) li,
    .navbar-responsive-toggler {
        cursor: pointer;
        transition: color, transform .5s;
    }

    nav ul li:hover {
        color: #744c4a
    }

    .navbar-responsive-toggler {
        display: none;
        flex-direction: column;
        width: 50px;
        gap: 12px !important;
        padding: 5px;
        border-radius: 50%;
        overflow: hidden;
        align-items: center;
    }

    .navbar-responsive-toggler li {
        background-color: rgb(199, 103, 103);
        width: 150%;
        height: 5px;
        transition: background, transform .5s;
    }

    .navbar-responsive-toggler:hover li {
        background-color: #744c4a;
    }

    .navbar-responsive-toggler:hover {
        transform: rotate(270deg);
    }

    .navbar-responsive-toggler li:first-child {
        transform: translate(-50%);
    }

    .navbar-responsive-toggler li:last-child {
        transform: translate(50%);
    }

    .responsive-nav-menu {
        position: absolute;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        animation: responsiveNavMenuOpen .5s forwards;
        width: 100vw;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
    }

    @keyframes responsiveNavMenuOpen {
        from {
            height: 0;
        }

        to {
            height: 50vh;
        }
        
    }

    @media screen and (max-width: 1800px) {
        .nav-menu {
            display: none;
        }

        .navbar-responsive-toggler {
            display: flex;
        }
    }
</style>