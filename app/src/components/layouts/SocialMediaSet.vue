<template>
    <ul>
        <li v-for="socialMedia of socialMedias" :title="socialMedia?.title" :key="socialMedia?.title">
            <a :href="socialMedia?.url" target="_blank"><component :is="socialMedia.icon" /></a>
        </li>
    </ul>
</template>
<script setup>
    import { 
        InstagramOutlined,
        YoutubeOutlined,
        TwitterOutlined,
        GithubOutlined,
        LinkedinOutlined
    } from '@ant-design/icons-vue';

    const socialMedias = [
        {
            title: 'GitHub',
            icon: GithubOutlined,
            url: ''
        },
        {
            title: 'LinkedIn',
            icon: LinkedinOutlined,
            url: ''
        },
        {
            title: 'Twitter',
            icon: TwitterOutlined,
            url: ''
        },
        {
            title: 'Youtube',
            icon: YoutubeOutlined,
            url: ''
        },
        {
            title: 'Instagram',
            icon: InstagramOutlined,
            url: ''
        }
    ]

</script>
<style scoped>
    a {
        color: #B79492;
        transition: .5 color;
    }

    a:hover {
        background-color: transparent;
        color: #744c4a;
    }
</style>