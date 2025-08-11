"use client";

import React, { useCallback, useMemo, useRef, useState } from 'react'
import Image from 'next/image';

interface SliderProps {
    images: string[];
    projectTitle: string;
}

const Slider = ({ images, projectTitle }: SliderProps) => {

    const totalSlides = images?.length ?? 0;
    const [current, setCurrent] = useState<number>(0);
    const trackId = useMemo(() => `media-track-${images.join('-')}`, [images]);

    const goTo = useCallback((index: number) => {
        if (totalSlides === 0) return;
        const next = (index + totalSlides) % totalSlides;
        setCurrent(next);
    }, [totalSlides]);

    const prev = useCallback(() => goTo(current - 1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1), [current, goTo]);

    // Touch support
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef<number>(0);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };
    const onTouchEnd = () => {
        const threshold = 40; // px
        if (touchDeltaX.current > threshold) prev();
        if (touchDeltaX.current < -threshold) next();
        touchStartX.current = null;
        touchDeltaX.current = 0;
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };

    return totalSlides > 0 && (
        <section
            className="media"
            aria-roledescription="carousel"
            aria-label={`${projectTitle} image gallery`}
            onKeyDown={onKeyDown}
        >
            <div
                className="media-viewport"
                role="group"
                aria-live="polite"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    id={trackId}
                    className="media-track"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div className="media-slide" key={index} aria-roledescription="slide" aria-label={`${index + 1} / ${totalSlides}`}>
                            <Image
                                src={src}
                                alt={`${projectTitle} – Image ${index + 1}`}
                                fill
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 600px"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>

                {totalSlides > 1 && (
                    <div className="nav">
                        <button
                            type="button"
                            className="nav-btn prev"
                            aria-label="Previous image"
                            aria-controls={trackId}
                            onClick={prev}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            className="nav-btn next"
                            aria-label="Next image"
                            aria-controls={trackId}
                            onClick={next}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>

            {totalSlides > 1 && (
                <div className="dots" role="tablist" aria-label="Image selector">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            role="tab"
                            aria-selected={current === index}
                            aria-label={`Show ${index + 1}. image`}
                            className={`dot ${current === index ? 'active' : ''}`}
                            onClick={() => goTo(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Slider