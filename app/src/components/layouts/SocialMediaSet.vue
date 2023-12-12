<template>
    <ul>
        <li v-for="socialMedia of socialMedias" :title="socialMedia?.title" :key="socialMedia?.title">
            <a :href="socialMedia?.url" target="_blank"><component :is="socialMedia.icon" /></a>
        </li>
    </ul>
</template>
<script setup>
    import {
        YoutubeOutlined,
        TwitterOutlined,
        GithubOutlined,
        LinkedinOutlined
    } from '@ant-design/icons-vue';

    const socialMedias = [
        {
            title: 'GitHub',
            icon: GithubOutlined,
            url: 'https://github.com/MERTULAS'
        },
        {
            title: 'LinkedIn',
            icon: LinkedinOutlined,
            url: 'https://www.linkedin.com/in/mert-ulas/'
        },
        {
            title: 'Twitter',
            icon: TwitterOutlined,
            url: 'https://twitter.com/mertulaas'
        },
        {
            title: 'Youtube',
            icon: YoutubeOutlined,
            url: 'https://www.youtube.com/@mertulas5967'
        }
    ]

</script>
<style scoped>
    ul {
        display: flex;
        gap: 40px;
        font-size: 2vh;
        z-index: 6;
    }

    a {
        color: #B79492;
        transition: .5 color;
    }

    a:hover {
        background-color: transparent;
        color: #744c4a;
    }

    @media screen and (max-width: 1000px) {
        ul {
            gap: 30px;
        }
    }
</style>