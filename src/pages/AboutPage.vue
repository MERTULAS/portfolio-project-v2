<template>
    <main class="cyberpunk">
        <div class="cyberpunk__glitch-overlay"></div>
        <div class="cyberpunk__container">
            <!-- Sol Panel - Profil -->
            <section class="cyberpunk__profile">
                <div class="profile-header">
                    <div class="profile-header__level">
                        <div class="level-ring"></div>
                        <span class="level-text">{{ character.level() }}</span>
                    </div>
                    <div class="profile-header__title">
                        <h1 class="glitch-text" data-text="MERT ULAS">{{ character.id }}</h1>
                        <span class="profile-header__class">{{ character.class }}</span>
                    </div>
                </div>

                <div class="neo-panel profile-info">
                    <h2 class="neo-panel__title">
                        <span class="neo-panel__icon">⟁</span>
                        AGENT DATA
                    </h2>
                    <div class="profile-info__content">
                        <p v-for="text in stringParser(character.info)" 
                           class="profile-info__text">{{ text }}</p>
                    </div>
                </div>
            </section>

            <!-- Sağ Panel - Skills & Missions -->
            <section class="cyberpunk__content">
                <!-- Tech Skills -->
                <div class="neo-panel skills-panel">
                    <h2 class="neo-panel__title">
                        <span class="neo-panel__icon">⟰</span>
                        TECH SKILLS
                    </h2>
                    <div class="skills-grid">
                        <div v-for="weapon in character.skills.weapons" 
                             :key="weapon.name"
                             class="skill-card"
                             :title="weapon.name">
                            <div class="skill-card__icon" v-html="weapon.icon"></div>
                            <div class="skill-card__info">
                                <span class="skill-card__name">{{ weapon.name }}</span>
                             <!--   <div class="skill-card__power">
                                    <div class="power-bar">
                                        <div class="power-bar__fill"></div>
                                        <div class="power-bar__glitch"></div>
                                    </div>
                                </div>
                            -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mission Log -->
                <div class="neo-panel mission-panel">
                    <h2 class="neo-panel__title">
                        <span class="neo-panel__icon">⟲</span>
                        MISSION LOG
                    </h2>
                    <div class="mission-timeline">
                        <div v-for="job in character.working_history" 
                             :key="job.company" 
                             class="mission-card">
                            <div class="mission-card__header">
                                <div class="mission-card__title">
                                    <h3>{{ job.position }}</h3>
                                    <span class="mission-card__company">{{ job.company }}</span>
                                </div>
                                <span class="mission-card__period">{{ job.period }}</span>
                            </div>
                            <p class="mission-card__desc">{{ job.description }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- <AnimationBackground /> -->
        <!-- <CyberpunkBackground /> -->
    </main>
</template>

<script setup>
import CyberpunkBackground from '@/views/CyberpunkBackground.vue'
import AnimationBackground from '@/views/AnimationBackground.vue'

const character = {
    id: 'MERT ULAS',
    class: 'Software Developer',
    born_year: 1996,
    software_development_started: 2020,
    level() {
        return new Date().getFullYear() - this.software_development_started
    },
    image: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    info: `Hello, I'm Mert Ulas, a software engineer, and a creative web developer. Focused on my professional career, I am an experienced frontend specialist who continues to pursue my passion for creating user-friendly web applications by combining aesthetics and functionality. Equipped with advanced skills in JavaScript, React JS, Vue JS, and CSS, I aim to reflect my passion for user interface design in my projects, creating unique and compelling user experiences.
In addition, with the advantage of mastering a wide range of software, I possess the ability to provide support in areas such as game development, data analysis, and other software fields as needed. The experience gained through various projects has enhanced my problem-solving skills and flexibility. I closely follow technological developments, emphasizing continuous learning and adapting to the evolving industry.
When you work with me, you'll find more than just someone who writes code; you'll find a business partner who understands your needs, solves problems, and strives to do their best to successfully complete your project. You can explore my portfolio for detailed information or get in touch with me.`,
    skills: {
        weapons: [
            {
                name: 'Next JS',
                icon: `<svg width="96" height="58" viewBox="0 0 96 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.652 15.1052H40.7584V16.5444H24.3117V27.3757H39.7777V28.8148H24.3117V40.7066H40.947V42.1457H22.652V15.1052ZM42.3805 15.1052H44.3043L52.8294 26.997L61.5432 15.1052L73.3953 0L53.9234 28.2468L63.9574 42.1457H61.9581L52.8294 29.4965L43.663 42.1457H41.7015L51.8109 28.2468L42.3805 15.1052ZM64.6741 16.5444V15.1052H85.3079V16.5444H75.802V42.1457H74.1423V16.5444H64.6741ZM0 15.1052H2.0747L30.6836 57.9158L18.8609 42.1457L1.7352 17.1503L1.65976 42.1457H0L0 15.1052ZM85.1407 40.2723C84.8016 40.2723 84.5473 40.0095 84.5473 39.67C84.5473 39.3304 84.8016 39.0677 85.1407 39.0677C85.4838 39.0677 85.7341 39.3304 85.7341 39.67C85.7341 40.0095 85.4838 40.2723 85.1407 40.2723ZM86.7716 38.6877H87.6597C87.6718 39.1688 88.0231 39.4921 88.5398 39.4921C89.1171 39.4921 89.444 39.1445 89.444 38.4937V34.3707H90.3483V38.4978C90.3483 39.67 89.6701 40.345 88.5479 40.345C87.4942 40.345 86.7716 39.6902 86.7716 38.6877ZM91.5311 38.6352H92.4273C92.504 39.189 93.045 39.5406 93.8241 39.5406C94.5507 39.5406 95.0836 39.1647 95.0836 38.6473C95.0836 38.2027 94.7445 37.9359 93.9735 37.754L93.2226 37.5721C92.169 37.3255 91.6886 36.8162 91.6886 35.9593C91.6886 34.9204 92.5363 34.2292 93.808 34.2292C94.9908 34.2292 95.8547 34.9204 95.9071 35.9027H95.0271C94.9423 35.3651 94.474 35.0296 93.7958 35.0296C93.0813 35.0296 92.605 35.3732 92.605 35.8986C92.605 36.315 92.9118 36.5535 93.6707 36.7313L94.3126 36.889C95.5075 37.1679 96 37.6529 96 38.5301C96 39.6457 95.1361 40.345 93.7555 40.345C92.4637 40.345 91.5957 39.6781 91.5311 38.6352Z" fill="white"/></svg>`
            },
            {
                name: 'React JS',
                icon: `<svg width="96" height="86" viewBox="0 0 96 86" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_156_386)"><path fill-rule="evenodd" clip-rule="evenodd" d="M96 42.7578C96 36.3984 88.0391 30.375 75.8281 26.6328C78.6484 14.1875 77.3906 4.28906 71.875 1.11719C70.6016 0.375 69.1172 0.0234375 67.4922 0.0234375V4.39062C68.3906 4.39062 69.1172 4.57031 69.7266 4.89844C72.3906 6.42188 73.5391 12.2344 72.6406 19.7109C72.4219 21.5469 72.0703 23.4844 71.6406 25.4609C67.8047 24.5234 63.6172 23.7969 59.2188 23.3281C56.5781 19.7109 53.8359 16.4219 51.0781 13.5469C57.4531 7.60938 63.4375 4.36719 67.5078 4.36719V0C62.125 0 55.0859 3.83594 47.9609 10.4922C40.8359 3.875 33.7969 0.078125 28.4141 0.078125V4.44531C32.4609 4.44531 38.4687 7.67188 44.8516 13.5625C42.1094 16.4375 39.375 19.7031 36.7734 23.3281C32.3516 23.7969 28.1641 24.5234 24.3281 25.4766C23.875 23.5234 23.5469 21.625 23.3125 19.8047C22.3906 12.3281 23.5312 6.51563 26.1719 4.96875C26.7578 4.61719 27.5234 4.46094 28.4219 4.46094V0.101562C26.7813 0.101562 25.2891 0.453125 24 1.19531C18.5 4.36719 17.2656 14.25 20.1094 26.6562C7.92187 30.4062 0 36.4141 0 42.7578C0 49.1172 7.96094 55.1406 20.1719 58.8828C17.3516 71.3281 18.6094 81.2266 24.125 84.3984C25.3984 85.1406 26.8828 85.4922 28.5313 85.4922C33.9141 85.4922 40.9531 81.6563 48.0781 75C55.2031 81.6172 62.2422 85.4141 67.625 85.4141C69.2656 85.4141 70.7578 85.0625 72.0469 84.3203C77.5469 81.1484 78.7812 71.2656 75.9375 58.8594C88.0781 55.125 96 49.0937 96 42.7578ZM56.9219 42.7578C56.9219 37.8203 52.9219 33.8125 47.9766 33.8125C43.0391 33.8125 39.0312 37.8125 39.0312 42.7578C39.0312 47.7031 43.0312 51.7031 47.9766 51.7031C52.9219 51.6953 56.9219 47.6953 56.9219 42.7578ZM70.5234 29.7031C69.7969 32.2266 68.8984 34.8281 67.8828 37.4297C67.0781 35.8672 66.2422 34.2969 65.3203 32.7344C64.4219 31.1719 63.4609 29.6406 62.5 28.1563C65.2812 28.5703 67.9609 29.0781 70.5234 29.7031ZM61.5625 50.5469C60.0391 53.1875 58.4688 55.6953 56.8438 58.0234C53.9297 58.2812 50.9766 58.4141 48 58.4141C45.0469 58.4141 42.0937 58.2734 39.1953 58.0391C37.5703 55.7109 35.9844 53.2266 34.4609 50.6016C32.9766 48.0391 31.625 45.4375 30.3906 42.8125C31.6016 40.1875 32.9766 37.5703 34.4375 35.0078C35.9609 32.3672 37.5312 29.8594 39.1562 27.5313C42.0703 27.2734 45.0234 27.1406 48 27.1406C50.9531 27.1406 53.9062 27.2813 56.8047 27.5156C58.4297 29.8438 60.0156 32.3281 61.5391 34.9531C63.0234 37.5156 64.375 40.1172 65.6094 42.7422C64.375 45.3594 63.0313 47.9766 61.5625 50.5469ZM67.8828 48C68.9375 50.625 69.8359 53.2422 70.5859 55.7891C68.0234 56.4141 65.3203 56.9453 62.5234 57.3516C63.4844 55.8438 64.4375 54.2969 65.3437 52.7109C66.2344 51.1484 67.0781 49.5625 67.8828 48ZM48.0391 68.875C46.2188 67 44.3984 64.9063 42.6016 62.6172C44.3594 62.6953 46.1641 62.7578 47.9844 62.7578C49.8203 62.7578 51.6406 62.7188 53.4219 62.6172C51.6562 64.9063 49.8359 67 48.0391 68.875ZM33.4844 57.3516C30.7031 56.9375 28.0234 56.4297 25.4609 55.8047C26.1875 53.2813 27.0859 50.6797 28.1016 48.0781C28.9063 49.6406 29.7422 51.2109 30.6641 52.7734C31.5859 54.3438 32.5234 55.8672 33.4844 57.3516ZM47.9375 16.6328C49.7578 18.5078 51.5781 20.6016 53.375 22.8906C51.6172 22.8125 49.8125 22.75 47.9922 22.75C46.1563 22.75 44.3359 22.7891 42.5547 22.8906C44.3203 20.6016 46.1406 18.5078 47.9375 16.6328ZM33.4609 28.1563C32.5 29.6641 31.5469 31.2109 30.6406 32.7969C29.7422 34.3594 28.8984 35.9297 28.0937 37.4922C27.0391 34.8672 26.1406 32.25 25.3906 29.7031C27.9609 29.0938 30.6641 28.5703 33.4609 28.1563ZM15.75 52.6563C8.82031 49.7031 4.34375 45.8281 4.34375 42.7578C4.34375 39.6875 8.82813 35.7891 15.75 32.8594C17.4297 32.1328 19.2734 31.4922 21.1719 30.8828C22.2891 34.7187 23.7578 38.7109 25.5781 42.7969C23.7813 46.8672 22.3281 50.8359 21.2344 54.6562C19.2969 54.0469 17.4531 53.3828 15.75 52.6563ZM26.2812 80.6172C23.6172 79.0938 22.4687 73.2813 23.3672 65.8047C23.5859 63.9688 23.9375 62.0313 24.3672 60.0547C28.2031 60.9922 32.3906 61.7187 36.7891 62.1875C39.4297 65.8047 42.1719 69.0938 44.9297 71.9688C38.5469 77.8984 32.5625 81.1484 28.4922 81.1484C27.6094 81.125 26.8672 80.9531 26.2812 80.6172ZM72.6953 65.7109C73.6172 73.1875 72.4766 79 69.8359 80.5469C69.25 80.8984 68.4844 81.0547 67.5859 81.0547C63.5391 81.0547 57.5313 77.8281 51.1484 71.9375C53.8906 69.0625 56.625 65.7969 59.2266 62.1719C63.6484 61.7031 67.8359 60.9766 71.6719 60.0156C72.125 61.9922 72.4766 63.8906 72.6953 65.7109ZM80.2266 52.6563C78.5469 53.3828 76.7031 54.0234 74.8047 54.6328C73.6875 50.7969 72.2188 46.8047 70.3984 42.7188C72.1953 38.6484 73.6484 34.6797 74.7422 30.8594C76.6797 31.4687 78.5156 32.1328 80.2422 32.8516C87.1719 35.8047 91.6484 39.6797 91.6484 42.75C91.6328 45.8281 87.1563 49.7188 80.2266 52.6563Z" fill="#00D8FF"/></g><defs><clipPath id="clip0_156_386"><rect width="96" height="85.4922" fill="white"/></clipPath></defs></svg>`
            },
            {
                name: 'Python',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.0939 10.0001C44.9839 10.0101 42.8279 10.2841 40.2219 10.7341C32.5259 12.0741 31.1239 14.8881 31.1239 20.0741V28.0001H49.1239V32.0001H30.4399H21.7399C16.4679 32.0001 11.8539 34.4841 10.3919 40.4381C8.7399 47.2721 8.6659 51.5521 10.3919 58.6881C11.7019 64.0101 14.5879 68.0001 19.8619 68.0001H27.1259V57.7921C27.1259 51.8601 32.4979 46.0001 38.6539 46.0001H53.1259C58.1719 46.0001 63.1259 42.2761 63.1259 37.2461V20.0741C63.1259 15.1961 59.6079 11.5481 54.6899 10.7301C54.8119 10.7181 51.1779 9.98815 48.0939 10.0001ZM38.1259 18.0001C39.7679 18.0001 41.1259 19.3541 41.1259 21.0041C41.1259 22.6701 39.7679 24.0001 38.1259 24.0001C36.4519 24.0001 35.1259 22.6721 35.1259 21.0041C35.1259 19.3601 36.4519 18.0001 38.1259 18.0001Z" fill="#0277BD"/><path d="M46.156 86C49.266 85.99 51.422 85.716 54.028 85.266C61.724 83.926 63.126 81.112 63.126 75.926V68H45.126V64H63.812H72.512C77.784 64 82.398 61.516 83.86 55.562C85.512 48.728 85.586 44.448 83.86 37.312C82.548 31.99 79.662 28 74.388 28H67.124V38.208C67.124 44.14 61.752 50 55.596 50H41.124C36.078 50 31.124 53.724 31.124 58.754V75.926C31.124 80.804 34.642 84.452 39.56 85.27C39.438 85.282 43.072 86.012 46.156 86ZM56.126 78C54.484 78 53.126 76.646 53.126 74.996C53.126 73.33 54.484 72 56.126 72C57.8 72 59.126 73.328 59.126 74.996C59.126 76.64 57.798 78 56.126 78Z" fill="#FFC107"/></svg>`
            },
            {
                name: 'JavaScript',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 84V12H84V84H12Z" fill="#FFD600"/><path d="M59.076 65.894C60.46 68.142 61.964 70.296 65.15 70.296C67.826 70.296 69.23 68.966 69.23 67.126C69.23 64.924 67.778 64.142 64.834 62.86L63.22 62.172C58.562 60.196 55.464 57.72 55.464 52.49C55.464 47.67 59.154 44.002 64.92 44.002C69.026 44.002 71.976 45.424 74.104 49.148L69.076 52.362C67.97 50.386 66.774 49.608 64.92 49.608C63.028 49.608 61.83 50.802 61.83 52.362C61.83 54.29 63.03 55.07 65.8 56.264L67.414 56.952C72.904 59.29 76 61.678 76 67.046C76 72.83 71.432 76 65.3 76C59.302 76 55.896 72.99 54 69.264L59.076 65.894ZM35.904 66.058C36.916 67.87 38.454 69.264 40.666 69.264C42.782 69.264 44 68.428 44 65.178V44H50.666V66.202C50.666 72.936 46.76 76 41.056 76C35.902 76 32.182 72.508 30.666 69.264L35.904 66.058Z" fill="#000001"/></svg>`
            },
            {
                name: 'Vue JS',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.9742 34L37.4682 16H5.94824L47.9742 88L90.0002 16H58.4802L47.9742 34Z" fill="#81C784"/><path d="M58.48 16L47.974 34L37.468 16H22.292L47.974 60L73.656 16H58.48Z" fill="#455A64"/></svg>`
            },
            {
                name: 'C++',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.806 6.57199C47.164 5.80999 48.836 5.80999 50.192 6.57199C56.902 10.338 77.094 21.674 83.806 25.44C85.164 26.2 86 27.608 86 29.132C86 36.664 86 59.334 86 66.866C86 68.39 85.164 69.798 83.806 70.56C77.096 74.326 56.904 85.662 50.192 89.428C48.834 90.19 47.162 90.19 45.806 89.428C39.096 85.662 18.904 74.326 12.192 70.56C10.836 69.798 10 68.392 10 66.868C10 59.336 10 36.666 10 29.134C10 27.61 10.836 26.202 12.194 25.44C18.902 21.674 39.098 10.338 45.806 6.57199Z" fill="#00549D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.608 68.8081C10.076 68.0961 10 67.4201 10 66.5101C10 59.0221 10 36.4821 10 28.9921C10 27.4761 10.834 26.0761 12.188 25.3201C18.874 21.5761 38.998 10.3061 45.684 6.56007C47.038 5.80207 48.872 5.81808 50.226 6.57608C56.912 10.3201 76.968 21.4941 83.654 25.2381C84.194 25.5421 84.606 25.9081 84.974 26.3901L10.608 68.8081Z" fill="#0086D4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48 20C63.454 20 76 32.546 76 48C76 63.454 63.454 76 48 76C32.546 76 20 63.454 20 48C20 32.546 32.546 20 48 20ZM48 34C55.726 34 62 40.272 62 48C62 55.726 55.726 62 48 62C40.274 62 34 55.726 34 48C34 40.272 40.272 34 48 34Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M84.97 26.4102C86.002 27.3762 85.982 28.8322 85.982 29.9782C85.982 37.5682 85.918 59.1562 86 66.7462C86.008 67.5382 85.746 68.3722 85.354 69.0002L47.186 48.0002L84.97 26.4102Z" fill="#0075C0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62 42H66V54H62V42ZM76 42H80V54H76V42Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M58 46H70V50H58V46ZM72 46H84V50H72V46Z" fill="white"/></svg>`
            },
            {
                name: 'C',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.806 6.57199C47.164 5.80999 48.836 5.80999 50.192 6.57199C56.902 10.338 77.094 21.674 83.806 25.44C85.164 26.2 86 27.608 86 29.132C86 36.664 86 59.334 86 66.866C86 68.39 85.164 69.798 83.806 70.56C77.096 74.326 56.904 85.662 50.192 89.428C48.834 90.19 47.162 90.19 45.806 89.428C39.096 85.662 18.904 74.326 12.192 70.56C10.836 69.798 10 68.392 10 66.868C10 59.336 10 36.666 10 29.134C10 27.61 10.836 26.202 12.194 25.44C18.902 21.674 39.098 10.338 45.806 6.57199Z" fill="#283593"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.608 68.8081C10.076 68.0961 10 67.4201 10 66.5101C10 59.0221 10 36.4821 10 28.9921C10 27.4761 10.834 26.0761 12.188 25.3201C18.874 21.5761 38.998 10.3061 45.684 6.56007C47.038 5.80207 48.872 5.81808 50.226 6.57608C56.912 10.3201 76.968 21.4941 83.654 25.2381C84.194 25.5421 84.606 25.9081 84.974 26.3901L10.608 68.8081Z" fill="#5C6BC0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48 20C63.454 20 76 32.546 76 48C76 63.454 63.454 76 48 76C32.546 76 20 63.454 20 48C20 32.546 32.546 20 48 20ZM48 34C55.726 34 62 40.272 62 48C62 55.726 55.726 62 48 62C40.274 62 34 55.726 34 48C34 40.272 40.272 34 48 34Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M84.97 26.4102C86.002 27.3762 85.982 28.8322 85.982 29.9782C85.982 37.5682 85.918 59.1562 86 66.7462C86.008 67.5382 85.746 68.3722 85.354 69.0002L47.186 48.0002L84.97 26.4102Z" fill="#3949AB"/></svg>`
            },
            {
                name: 'CSS3',
                icon: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 86.25L5.625 0H90.1875L82.5 86.25L48 96" fill="#264DE4"/><path d="M48 6.9375V88.5L75.9375 80.8125L82.5 6.9375" fill="#2965F1"/><path d="M21.375 17.625H48V28.125H22.3125M23.25 39H48V49.6875H24.1875M24.75 54.9375H35.25L36 63.375L48 66.5625V77.625L26.0625 71.625" fill="#EBEBEB"/><path d="M48 39V49.6875H60.9375L59.625 63.375L48 66.5625V77.625L69.5625 71.625L74.4375 17.625H48V28.125H63L61.9688 39H48Z" fill="white"/></svg>`
            }
        ],
        skills: [
            {
                name: 'Web Development'
            },
            {
                name: 'Game Development'
            },
            {
                name: 'Deep Learning'
            },
            {
                name: 'Data Analysis'
            },
            {
                name: 'Optimization'
            }
        ]
    },
    working_history: [
        {
            company: 'Kartaca Software',
            company_logo: '',
            period: '05.2024 - Present',
            position: 'Frontend Developer',
            description: 'I am currently working as a Frontend Developer at Kartaca Software. I am responsible for developing and maintaining the company\'s web applications using React.js and Next.js. I am also responsible for developing and maintaining the company\'s projects.'
        },
        {
            company: 'Huawei Technologies R&D',
            company_logo: '',
            period: '05.2021 - 05.2024', 
            position: 'Software Engineer',
            description: 'I was working as a Software Engineer at Huawei Technologies R&D. I was responsible for developing and maintaining the company\'s web applications using Python and JavaScript. As a framework, I used Vue.js, React.js, Next.js, Django, FastAPI.'
        }
    ]
}

function stringParser (str) {
    return str.split('\n');
}

</script>

<style scoped>
.cyberpunk {
    /* background: #0a0a0a; */
    color: #ffffff;
    position: relative;
    overflow: hidden;
}

.cyberpunk__glitch-overlay {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
        180deg,
        rgba(202, 83, 83, 0.03) 0px,
        transparent 1px,
        transparent 3px
    );
    pointer-events: none;
    z-index: 1;
    animation: scanline 8s linear infinite;
}

.cyberpunk__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: minmax(300px, 400px) 1fr;
    gap: 2rem;
    position: relative;
    z-index: 2;
}

/* Profile Section */
.profile-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: rgba(202, 83, 83, 0.1);
    border-left: 4px solid rgba(202, 83, 83, 0.9);
    position: relative;
}

.profile-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 4px;
    height: 100%;
    background: rgba(202, 83, 83, 0.9);
    animation: glowBar 2s ease-in-out infinite;
}

.profile-header__level {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.level-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(202, 83, 83, 0.9);
    border-radius: 50%;
    animation: rotate 4s linear infinite;
}

.level-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(202, 83, 83, 0.9);
}

/* Neo Panels */
.neo-panel {
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(202, 83, 83, 0.3);
    padding: 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.neo-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(202, 83, 83, 0.9),
        transparent
    );
    animation: scanGlow 2s linear infinite;
}

.neo-panel__title {
    font-size: 1.2rem;
    color: rgba(202, 83, 83, 0.9);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 0 10px rgba(202, 83, 83, 0.5);
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.skill-card {
    background: rgba(20, 20, 20, 0.9);
    padding: 1.25rem;
    border: 1px solid rgba(202, 83, 83, 0.2);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    min-height: 80px;
}

.skill-card:hover {
    transform: translateY(-2px);
    border-color: rgba(202, 83, 83, 0.9);
    box-shadow: 0 0 20px rgba(202, 83, 83, 0.2);
}

.skill-card:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
        transparent,
        rgba(202, 83, 83, 0.1),
        transparent
    );
    animation: glowSweep 1s ease-in-out;
}

.skill-card__icon {
    min-width: 48px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 5px rgba(202, 83, 83, 0.5));
}

.skill-card__icon svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.skill-card__info {
    flex: 1;
    min-width: 0;
}

.skill-card__name {
    display: block;
    font-size: 1.1rem;
    color: rgba(202, 83, 83, 0.9);
}

.power-bar {
    height: 4px;
    background: rgba(20, 20, 20, 0.9);
    border-radius: 2px;
    margin-top: 0.5rem;
    overflow: hidden;
    position: relative;
}

.power-bar__fill {
    height: 100%;
    width: 75%;
    background: rgba(202, 83, 83, 0.9);
    animation: powerPulse 2s ease-in-out infinite;
}

.power-bar__glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(202, 83, 83, 0.9);
    opacity: 0;
    animation: powerGlitch 3s ease-in-out infinite;
}

/* Mission Timeline */
.mission-timeline {
    display: grid;
    gap: 1rem;
}

.mission-card {
    background: rgba(20, 20, 20, 0.9);
    padding: 1rem;
    border-left: 3px solid rgba(202, 83, 83, 0.9);
    position: relative;
}

.mission-card::before {
    content: '';
    position: absolute;
    left: -3px;
    top: 0;
    width: 3px;
    height: 100%;
    background: rgba(202, 83, 83, 0.9);
    animation: glowBar 2s ease-in-out infinite;
}

.mission-card__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.mission-card__period {
    color: rgba(202, 83, 83, 0.7);
    font-size: 0.9rem;
}

/* Animations */
@keyframes scanline {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes glowBar {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
}

@keyframes powerPulse {
    0%, 100% {
        opacity: 0.8;
    }
    50% {
        opacity: 1;
    }
}

@keyframes powerGlitch {
    0%, 100% {
        opacity: 0;
        transform: translateX(-100%);
    }
    10%, 90% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
        transform: translateX(100%);
    }
}

@keyframes glowSweep {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

@keyframes scanGlow {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .cyberpunk__container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .cyberpunk__container {
        padding: 1rem;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .profile-header {
        flex-direction: column;
        text-align: center;
    }
    
    .skill-card {
        padding: 1rem;
    }
    
    .skill-card__icon {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 480px) {
    .mission-card__header {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .neo-panel {
        padding: 1rem;
    }
    
    .skill-card__icon {
        width: 36px;
        height: 36px;
    }
}
</style>