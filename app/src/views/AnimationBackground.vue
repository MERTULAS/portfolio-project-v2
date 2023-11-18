<template>
    <canvas id="background-canvas"></canvas>
    <!-- <video src="../assets/space-warp.mov" autoplay loop playsinline muted></video> -->
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
        this.stars = Array.from({ length: 200 }, 
            () => new Star(Math.random() * innerWidth, Math.random() * innerHeight, Math.random())
        );
        
        this.constantStars = Array.from({ length: 200 }, 
            () => new Star(Math.random() * innerWidth, Math.random() * innerHeight, Math.random())
        );

        this.originPoint = {
            x: innerWidth >> 1,
            y: innerHeight >> 1
        }

        this.hue = 0;
        this.lightness = 0;
    }

    #calculateMoveStep (star) {
        const xDiff = star.x - this.originPoint.x;
        const yDiff = star.y - this.originPoint.y;
        let angle = Math.atan2(yDiff, xDiff);
        // angle += angle < 0 ? 360 : 0
        star.x += Math.cos(angle) * .5;
        star.y += Math.sin(angle) * .5; 
        if (star.x > innerWidth || star.x < 0 || star.y > innerHeight || star.y < 0) { 
            star.x = (this.originPoint.x) - 100 + Math.random() * 200;
            star.y =  (this.originPoint.y) - 100 + Math.random() * 200; 
            // star.z = 1;
        }
        // star.z += 0.01;
    }

    update() {
        this.#draw();
        this.stars.forEach(star => {
            this.#calculateMoveStep(star);
        })
    }

    #draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, .7)';
        this.ctx.fillRect(0, 0, innerWidth, innerHeight);
        this.hue = this.hue > 360 ? 0 : this.hue + .5;
        this.ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
        this.stars.forEach(star => {
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.z, 0, Math.PI * 2);
            this.ctx.fill();
        })

        
        this.lightness = this.lightness > 99 ? 30 : this.lightness;
        this.lightness += .35
        this.ctx.fillStyle = `hsl(256, 0%, ${this.lightness}%)`;
        this.constantStars.forEach(star => {
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

    addEventListener('mousemove', (e) => {
        window.space.originPoint.x = e.x;
        window.space.originPoint.y = e.y;
    })

    spaceAnimation();
})

</script>

<style>
#background-canvas {
    width: 100vw;
    height: 100vh;
    background: radial-gradient(ellipse at center, #242938, #000 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
}
</style>