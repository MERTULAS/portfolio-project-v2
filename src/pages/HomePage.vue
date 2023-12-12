<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import AnimationBackground from '../views/AnimationBackground.vue';

const router = useRouter();

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
  setOrigin: function (element) {
    this.xCenter = element.offsetLeft + Math.floor(element.offsetWidth >> 1);
    this.yCenter = element.offsetTop + Math.floor(element.offsetHeight >> 1);
  },
  update: function (e) {
    // const e = e || window.event;
    this.x = e.clientX - this.xCenter;
    this.y = -(e.clientY - this.yCenter);
  }
}

function menuTransformStyleUpdate(x, y) {
  return `rotateX(${x}deg) rotateY(${y}deg)`;
}


onMounted(() => {
  const menuElement = document.querySelector('.main-menu');
  const menuElementContainer = document.querySelector('.main-menu-wrapper');

  mouseOnTheMenu.setOrigin(menuElement);

  menuElementContainer.addEventListener('mousemove', function (e) {
    mouseOnTheMenu.update(e);
    menuElement.style.transform = menuTransformStyleUpdate(mouseOnTheMenu.y / (menuElement.offsetHeight >> 1), mouseOnTheMenu.x / (menuElement.offsetWidth >> 1));
  });

})
</script>

<template>
  <main class="page home-page">
    <svg class="bg-red-clouds" fill="none">
      <g filter="url(#filter0_f_131_384)">
        <path d="M750.622 244.466C412.41 421.315 2196.41 1023.86 1663.83 509.38C1131.25 -5.10056 1635.26 227.43 1858.88 211.798C2082.5 196.166 1778.29 910.415 1940.4 647.707C2102.5 384.999 3044 393.994 2387 196.996C1730 -0.00267792 2654.06 1524.99 2256.47 1298C1858.88 1071 2406.15 922.373 1940.4 839.118C1474.64 755.863 2121.44 978.966 1170.22 1199.48C218.999 1420 1351.3 985.612 881.652 615.039C412 244.466 610.52 1640.24 267.01 1169.37C-76.5003 698.495 538 443.997 219.999 322.562C-98.0017 201.126 1088.83 67.6171 750.622 244.466Z" stroke="#FF0000" stroke-width="17"/>
      </g>
      <defs>
        <filter id="filter0_f_131_384" x="0.510742" y="0.504883" width="2775.21" height="1479.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_131_384"/>
        </filter>
      </defs>
    </svg>
    <svg fill="none">
      <g filter="url(#filter0_f_126_424)">
      <path d="M895.28 264.44C918.916 407.786 205 365.94 337.699 567.404M895.28 264.44C1329.53 234.072 1608.78 111.686 1723.2 343.44M895.28 264.44L995.199 496.44M337.699 567.404C891.668 492.376 1827.2 819.94 1283.8 964.911M337.699 567.404L205 879.723M1283.8 964.911C1873.7 1283.94 1886.03 837.71 1723.2 343.44M1283.8 964.911L1139.11 1247.44M1723.2 343.44L1739.61 657.297M995.199 496.44C644.899 568.46 1321.2 1086.44 205 879.723M995.199 496.44C1238.45 292.38 1446.19 370.992 1739.61 657.297M205 879.723C1066.7 1150.44 -171.39 1177.44 1139.11 1247.44M1139.11 1247.44C1144.36 629.211 1344.62 269.843 1739.61 657.297" stroke="white" stroke-width="10" stroke-linejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_f_126_424" x="0" y="0" width="2017.74" height="1452.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_126_424"/>
        </filter>
      </defs>
    </svg>
    <nav class="main-menu-wrapper">
      <ul class="main-menu">
        <li v-for="menuItem in mainMenu" :key="menuItem.title" @click="() => router.push(menuItem.path)"
          :data-title="menuItem.title">
          <div class="glitch-effect-stick"></div>
          {{ menuItem.title }}
        </li>
      </ul>
      <ul class="back-shadow-menu">
        <li v-for="menuItem in mainMenu" :key="menuItem.title">{{ menuItem.title }}</li>
      </ul>
    </nav>
    <AnimationBackground />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

nav {
  /* font-family: 'VT323', monospace; */
  padding: 0 100px;
  perspective: 200px;
  display: flex;
  align-items: center;
  user-select: none;
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

.main-page-content {
  flex: 1;
  position: relative;
  perspective: 100px;
}

svg:not(.bg-red-clouds) path {
  stroke-dasharray: 1410;
  stroke-dashoffset: 1410;
  animation: drawLine 3s infinite alternate;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.bg-red-clouds {
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: drawLine 7s infinite alternate;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}
</style>