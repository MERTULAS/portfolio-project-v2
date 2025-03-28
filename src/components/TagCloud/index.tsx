'use client'
import React, { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud';

const TagCloudWrapper = () => {
    const tagCloudRef = useRef<HTMLDivElement>(null);


    
    const texts = [
        'Next.js',
        'React',
        'TypeScript',
        'CSS',
        'HTML',
        'JavaScript',
        'Python',
        'C++',
        'C',
        "Vue.js",
        "Game Development",
        "Graphics",
        "AI"
    ];


    const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 90,
        keep: true,
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontColor: 'white',
    }

    useEffect(() => {
        if (tagCloudRef.current) {
            const tagCloud = TagCloud(tagCloudRef.current, texts, options);
        }
    }, []);
  return (
    <div
        className="tag-cloud"   
        ref={tagCloudRef}
        style={{
            width: '100%',
            height: '100%',
        }}
    />
  )
}

export default TagCloudWrapper;