<template>
    <main class="page projects-page">
        <h1> This page is under development. </h1>
        <h2> For now, you can check out some of my open source projects on my github profile. </h2>
            <a href="https://github.com/MERTULAS" target="_blank"><GithubOutlined /></a>
    </main>
</template>
<script setup>
import {
    GithubOutlined
} from '@ant-design/icons-vue';

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
    .projects-page {
        font-size: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        gap: 40px;
    }
    
    h1, h2 {
        text-align: center;
    }

    h2 {
        font-size: 18px;
    }

    a {
        color: #B79492;
        transition: .5 color;
        font-size: 5em;
    }

    a:hover {
        background-color: transparent;
        color: #744c4a;
    }
</style>