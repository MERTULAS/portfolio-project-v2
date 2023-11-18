<template>
    <nav>
        <h2>MERT ULAS<span>Software Developer</span></h2>
        <ul v-if="route.path !== '/'">
            <li
                v-for="(menuItem, index) in menu"
                :key="menuItem.title"
                @click="() => router.push(menuItem.path)"> <span>0{{ index + 1 }}</span>. {{ menuItem.title }}</li>
        </ul>
        <SocialMediaSet />
    </nav>
</template>
<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import SocialMediaSet from './SocialMediaSet.vue';

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
    align-items: flex-end;
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

nav ul li {
    cursor: pointer;
    transition: color .5s;
}

nav ul li:hover {
    color: #744c4a
}
</style>