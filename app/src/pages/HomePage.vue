<script setup>
import { onMounted } from 'vue';


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

      console.log(menuElement.style.transform);
    });
         
  })

</script>

<template>
  <nav>
    <ul>
      <li v-for="menuItem in mainMenu" :key="menuItem.title" @click="() => {}">{{ menuItem.title }}</li>
    </ul>
  </nav>
  <div>
    BURAYA BIR SEYLER
  </div>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

nav {
  font-size: 8vmax;
  padding: 40px 100px;
  perspective: 100px;
}

li {
  cursor: pointer;
  margin: 20px;
  text-transform: uppercase;
  transition: .5s all;
}

li:hover {
  color: rgb(48, 48, 48);
}

</style>