"use client"

import React, { useEffect, useRef, useState } from 'react'
import { debounce } from '@/utils/debounce'

const SpaceTravelBackground = () => {
    const spaceRef = useRef<Space | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    class Star {
        x: number;
        y: number;
        z: number;
        speed: number;

        constructor(x: number, y: number, z: number) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.speed = Math.random() * .001;
        }
    }

    class Space {
        stars: Star[];
        constantStars: Star[];
        originPoint: { x: number, y: number };

        constructor() {
            this.stars = Array.from({ length: 800 },
                () => new Star(
                    Math.random() * window.innerWidth - window.innerWidth / 2,
                    Math.random() * window.innerHeight - window.innerHeight / 2,
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
        }

        updateOriginPoint(x: number, y: number) {
            this.originPoint = { x, y };
        }

        #calculateMoveStep(star: Star) {
            star.z -= star.speed;

            if (star.z < 0) {
                star.z = Math.random() * 3;
                star.x = (Math.random() * innerWidth - innerWidth / 2);
                star.y = (Math.random() * innerHeight - innerHeight / 2);
            }

            let scale = 1 / star.z;

            let targetX = this.originPoint.x - innerWidth / 2;
            let targetY = this.originPoint.y - innerHeight / 2;

            let x = (star.x + targetX * star.z * 0.1) * scale + innerWidth / 2;
            let y = (star.y + targetY * star.z * 0.1) * scale + innerHeight / 2;

            return { x, y, scale };
        }

        update(ctx: CanvasRenderingContext2D) {
            this.#draw(ctx);
            this.stars.forEach(star => {
                this.#calculateMoveStep(star);
            })
        }

        #draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = 'rgba(0, 0, 0, .8)';
            ctx.fillRect(0, 0, innerWidth, innerHeight);

            this.stars.forEach(star => {
                const pos = this.#calculateMoveStep(star);
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z * 0.3})`;
                ctx.arc(pos.x, pos.y, pos.scale * .5, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        spaceRef.current = new Space();

        const handleResize = debounce(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            spaceRef.current = new Space();
        }, 100);

        const handleMouseMove = debounce((event: MouseEvent) => {
            if (spaceRef.current) {
                spaceRef.current.updateOriginPoint(event.clientX, event.clientY);
            }
        }, 1);

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            if (spaceRef.current) {
                spaceRef.current.update(ctx);
            }
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas ref={canvasRef} id='background-canvas'></canvas>
    );
};

export default SpaceTravelBackground;