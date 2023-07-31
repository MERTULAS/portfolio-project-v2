<template>
    <canvas id="background-canvas"></canvas>
</template>

<script setup>
import { markRaw, onMounted } from "vue";

class Star {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Space {
    constructor(ctx) {
        this.ctx = ctx;
        this.stars = Array.from({ length: 500 }, 
            () => new Star(Math.random() * innerWidth, Math.random() * innerHeight, Math.random() * 3)
        );

        this.originPoint = {
            x: innerWidth >> 1,
            y: innerHeight >> 1
        }
    }

    #calculateMoveStep (star) {
        const xDiff = star.x - this.originPoint.x;
        const yDiff = star.y - this.originPoint.y;
        const angle = Math.atan2(yDiff, xDiff);
        star.x += Math.cos(angle);
        star.y += Math.sin(angle);
        if (star.x > innerWidth || star.x < 0) star.x = Math.random() * ( innerWidth >> 1 );
        if (star.y > innerHeight || star.y < 0) star.y = Math.random() * ( innerHeight >> 1 );

        // star.z += 0.01;
    }

    update() {
        this.#draw();
        this.stars.forEach(star => {
            this.#calculateMoveStep(star);
        })

        addEventListener('mousemove', (e) => {
            this.originPoint.x = e.x;
            this.originPoint.y = e.y;
        })
    }

    #draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, .1)';
        this.ctx.fillRect(0, 0, innerWidth, innerHeight);
        this.stars.forEach(star => {
            this.ctx.fillStyle = 'whitesmoke';
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.z, 0, Math.PI * 2);
            this.ctx.fill();
        })
    }

}

function spaceAnimation () {
    window.space.update();
    requestAnimationFrame(spaceAnimation);
}

onMounted(() => {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.space = new Space(ctx);

    spaceAnimation();
})

</script>

<style>
#background-canvas {
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0);
    position: absolute;
    z-index: -5;
}
</style>