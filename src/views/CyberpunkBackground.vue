<template>
    <canvas ref="bgCanvas" class="cyberpunk-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bgCanvas = ref(null);
let animationFrame = null;

class DigitalRain {
    constructor(canvas) {
        console.log('DigitalRain constructor called');
        console.log('Initial canvas size:', canvas.width, 'x', canvas.height);
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.fontSize = 14;
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        this.drops = [];
        
        // Explicit initial sizing
        this.resizeCanvas();
        
        // Bind the resize method to maintain context
        this.boundResize = this.resizeCanvas.bind(this);
        window.addEventListener('resize', this.boundResize);
        
        this.initDrops();
        console.log('After init canvas size:', canvas.width, 'x', canvas.height);
    }

    resizeCanvas() {
        console.log('resizeCanvas called');
        if (!this.canvas) {
            console.error('Canvas is null in resizeCanvas');
            return;
        }
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log('Setting canvas size to:', width, 'x', height);
        
        this.canvas.width = width;
        this.canvas.height = height;
        
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        console.log('New canvas size:', this.canvas.width, 'x', this.canvas.height);
    }

    initDrops() {
        this.drops = [];
        for(let i = 0; i < this.columns; i++) {
            this.drops[i] = {
                x: i * this.fontSize,
                y: Math.random() * -100,
                speed: Math.random() + 2,
                length: Math.floor(Math.random() * 20 + 5),
                characters: []
            };
            
            for(let j = 0; j < this.drops[i].length; j++) {
                this.drops[i].characters[j] = {
                    char: this.characters[Math.floor(Math.random() * this.characters.length)],
                    alpha: Math.random()
                };
            }
        }
    }

    draw() {
        // Yarı saydam siyah arka plan ekleyerek iz efekti oluştur
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i = 0; i < this.drops.length; i++) {
            const drop = this.drops[i];
            
            for(let j = 0; j < drop.length; j++) {
                const charObj = drop.characters[j];
                const y = drop.y - (j * this.fontSize);
                
                if(y > 0 && y < this.canvas.height) {
                    // Ana karakter
                    this.ctx.fillStyle = `rgba(202, 83, 83, ${charObj.alpha})`;
                    this.ctx.font = `${this.fontSize}px monospace`;
                    this.ctx.fillText(charObj.char, drop.x, y);
                    
                    // Glow efekti
                    this.ctx.shadowColor = 'rgba(202, 83, 83, 0.5)';
                    this.ctx.shadowBlur = 10;
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${charObj.alpha * 0.5})`;
                    this.ctx.fillText(charObj.char, drop.x, y);
                    this.ctx.shadowBlur = 0;
                }
            }

            // Drop'u hareket ettir
            drop.y += drop.speed;

            // Ekranın altına ulaşınca resetle
            if(drop.y - (drop.length * this.fontSize) > this.canvas.height) {
                drop.y = Math.random() * -100;
                drop.speed = Math.random() * 0.5 + 0.5;
                
                // Karakterleri yenile
                for(let j = 0; j < drop.length; j++) {
                    drop.characters[j] = {
                        char: this.characters[Math.floor(Math.random() * this.characters.length)],
                        alpha: Math.random()
                    };
                }
            }
        }
    }

    animate() {
        this.draw();
        animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    destroy() {
        console.log('Destroying DigitalRain');
        window.removeEventListener('resize', this.boundResize);
        if(animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    }
}

onMounted(() => {
    console.log('Component mounted');
    if (bgCanvas.value) {
        console.log('Canvas ref exists');
        const digitalRain = new DigitalRain(bgCanvas.value);
        digitalRain.animate();

        onBeforeUnmount(() => {
            console.log('Component unmounting');
            digitalRain.destroy();
        });
    } else {
        console.error('Canvas ref is null on mount');
    }
});
</script>

<style scoped>
.cyberpunk-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0.3;
    pointer-events: none;
    background-color: rgba(0,0,0,0.1); /* Debug için arka plan rengi */
}
</style> 