<template>
    <canvas id="background-canvas"></canvas>
    <!-- <video src="../assets/space-warp.mov" autoplay loop playsinline muted></video> -->
</template>

<script setup>
    import { onMounted, onBeforeUnmount } from "vue";

    class Star {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.speed = Math.random() * .001;
        }
    }

    class Space {
        constructor(ctx) {
            this.ctx = ctx;
            this.stars = Array.from({ length: 800 }, 
                () => new Star(
                    Math.random() * innerWidth - innerWidth/2, 
                    Math.random() * innerHeight - innerHeight/2,
                    Math.random() * 3
                )
            );
            
            this.constantStars = Array.from({ length: 50 }, 
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
            star.z -= star.speed;
            
            if (star.z < 0) {
                star.z = Math.random() * 3;
                star.x = (Math.random() * innerWidth - innerWidth/2);
                star.y = (Math.random() * innerHeight - innerHeight/2);
            }
            
            let scale = 1 / star.z;
            
            let targetX = this.originPoint.x - innerWidth/2;
            let targetY = this.originPoint.y - innerHeight/2;
            
            let x = (star.x + targetX * star.z * 0.1) * scale + innerWidth/2;
            let y = (star.y + targetY * star.z * 0.1) * scale + innerHeight/2;
            
            return { x, y, scale };
        }

        update() {
            this.#draw();
            this.stars.forEach(star => {
                this.#calculateMoveStep(star);
            })
        }

        #draw() {
            this.ctx.fillStyle = 'rgba(0, 0, 0, .8)';
            this.ctx.fillRect(0, 0, innerWidth, innerHeight);
            
            this.stars.forEach(star => {
                const pos = this.#calculateMoveStep(star);
                this.ctx.beginPath();
                this.ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z * 0.3})`;
                this.ctx.arc(pos.x, pos.y, pos.scale * .5, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }

    }

    function spaceAnimation () {
        window.space.update();
        requestAnimationFrame(spaceAnimation);
    }

    function defineCanvas() {
        const canvas = document.getElementById('background-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.space = new Space(ctx);
    }

    function mouseMoveHandler (e) {
        window.space.originPoint.x = e.x;
        window.space.originPoint.y = e.y;
    }

    onMounted(() => {
        defineCanvas();

        addEventListener('mousemove', mouseMoveHandler);
        addEventListener('resize', defineCanvas);

        spaceAnimation();
    })

    onBeforeUnmount(() => {
        removeEventListener('mousemove', mouseMoveHandler);
        removeEventListener('resize', defineCanvas);
    })

    // const beforeRouteLeaveHandler = (to, from, next) => {
    //   removeEventListener('mousemove', mouseMoveHandler);
    //   next();
    // };

    // onBeforeRouteLeave(beforeRouteLeaveHandler)
    
</script>

<style>
    #background-canvas {
        width: 100vw;
        height: 100vh;
        background: radial-gradient(ellipse at center, #092e9c, #d8d3d3 100%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
    }
</style>