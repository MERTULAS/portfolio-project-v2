<script setup>
import { onMounted } from 'vue';
import AnimationBackground from '../views/AnimationBackground.vue';


  const mainMenu = [
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

  const mouseOnTheMenu = {
    xCenter: null,
    yCenter: null,
    x: null,
    y: null,
    setOrigin: function(element) {
      this.xCenter = element.offsetLeft + Math.floor(element.offsetWidth >> 1);
      this.yCenter = element.offsetTop + Math.floor(element.offsetHeight >> 1);
    },
    update: function (e) {
      // const e = e || window.event;
      this.x = e.clientX - this.xCenter;
      this.y = -(e.clientY - this.yCenter);
    }
  }

  function menuTransformStyleUpdate (x, y) {
    return `rotateX(${x}deg) rotateY(${y}deg)`;
  }

  onMounted(() => {
    const menuElement = document.querySelector('nav ul');
    const menuElementContainer = document.querySelector('nav');

    mouseOnTheMenu.setOrigin(menuElement);
    
    menuElementContainer.addEventListener('mousemove', function(e) {
      mouseOnTheMenu.update(e);
      menuElement.style.transform = menuTransformStyleUpdate(mouseOnTheMenu.y / (menuElement.offsetHeight >> 1), mouseOnTheMenu.x / (menuElement.offsetWidth >> 1));
    });
         
  })

</script>

<template>
  <nav>
    <ul class="main-menu">
      <li 
        v-for="menuItem in mainMenu" 
        :key="menuItem.title" 
        @click="() => {}" 
        :data-title="menuItem.title"
      >
        <div class="glitch-effect-stick"></div>
        {{ menuItem.title }}
      </li>
    </ul>
    <ul class="back-shadow-menu">
      <li v-for="menuItem in mainMenu" :key="menuItem.title">{{ menuItem.title }}</li>
    </ul>
  </nav>
  <div>
    BURAYA BIR SEYLER
  </div>
  <AnimationBackground />
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

nav {
  padding: 40px 100px;
  perspective: 200px;
  display: flex;
  align-items: center;
}

nav ul {
  flex: 1;
  /* opacity: .5; */
}

li {
  cursor: pointer;
  font-size: 6vmax;
  line-height: 1;
  text-transform: uppercase;
  transition: .5s all;
  padding: 20px;
  /* text-shadow: 15px 5px rgba(192, 64, 64, .5); */
}

.main-menu li:hover {
  color: rgb(48, 48, 48);
}

.main-menu li {
  position: relative;
  width: fit-content;
}

.back-shadow-menu {
  position: absolute;
  background: transparent;
  color: rgba(202, 83, 83, 0.9);
  z-index: -1;
}


.main-menu li:hover::after,
.main-menu li:hover::before {
  content: attr(data-title);
  position: absolute;
  font-size: 6vmax;
  overflow: hidden;
}

.main-menu li:hover::before {
    left: 20.5px;
    height: 0px;
    color: rgba(255, 255, 255, 0.9);
    z-index: 2;
    animation: redShadow .7s ease-in infinite;
    text-shadow: 8px 0 0 red;
}

.main-menu li:hover::after {
    left: 17px;
    color: rgba(255, 255, 255, 0.8);
    z-index: 3;
    background: rgba(0, 0, 0, 0.9);
    animation: redHeight 1s ease-out infinite;
    text-shadow: -5px 0 0 cyan;
    mix-blend-mode: darken;
}

.glitch-effect-stick {
    display: none;
    position: absolute;
    width: calc(100% - 40px);
    height: 3px;
    background: rgba(0, 0, 0, 1);
    z-index: 4;
    animation: whiteMove 2s ease-out infinite;
}

.main-menu li:hover .glitch-effect-stick {
  display: block;
}

@keyframes redShadow {
    20% {
        height: 30%;
    }
    60% {
        height: 6%;
    }
    100% {
        height: 89%;
    }
}

@keyframes redHeight {
    20% {
        height: 42%;
    }
    35% {
        height: 12%;
    }
    50% {
        height: 40%;
    }
    60% {
        height: 20%;
    }
    70% {
        height: 95%;
    }
    80% {
        height: 54%;
    }
    100% {
        height: 100%;
    }
}

@keyframes whiteMove {
    8% {
        top: 38%;
    }
    14% {
        top: 10%;
    }
    20% {
        top: 42%;
    }
    32% {
        top: 15%;
    }
    99% {
        top: 90%;
    }
}

</style>