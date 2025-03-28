'use client';

import Link from 'next/link';
import React from 'react'

const CVDownloader = () => {
    return (
        <Link
            href="/MERT_ULAS_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
                e.preventDefault();
                const link = document.createElement('a');
                link.href = '/MERT_ULAS_CV.pdf';
                link.download = 'MERT_ULAS_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }}
            className="profile-header__cv-button"
            title="Download MERT ULAS CV"
            aria-label="Download MERT ULAS CV"
        >
            <svg className="cv-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 15.5L7.5 11M12 15.5L16.5 11M12 15.5V4.5M6 19.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="cv-text">CV</span>
        </Link>
    )
}

export default CVDownloader;