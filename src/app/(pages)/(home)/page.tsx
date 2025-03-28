import "@/app/home.scss";
import MainMenu from "@/components/MainMenu";
import SpaceTravelBackground from "@/components/SpaceTravelBackground";
//import TagCloudWrapper from "@/components/TagCloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mert Ulaş",
  "jobTitle": "Software Developer",
  "url": "https://mertulas.dev",
  "sameAs": [
    "https://github.com/MERTULAS",
    "https://www.linkedin.com/in/mert-ulas/",
    "https://twitter.com/mertulaas"
  ],
  "image": "https://mertulas.dev/assets/img/mert-ulas.jpg",
  "description": "Software Developer",
  "knowsLanguage": ["Turkish", "English"],
  "knowsAbout": ["Web Development", "Frontend", "React", "Next.js", "TypeScript", "C++", "C", "Python"]
};

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="bg-clouds">
        <svg className="bg-red-clouds" fill="none" viewBox="0 0 2775.21 1479.1" width="100%" height="100%">
          <g filter="url(#filter0_f_red)">
            <path
              d="M750.622 244.466C412.41 421.315 2196.41 1023.86 1663.83 509.38C1131.25 -5.10056 1635.26 227.43 1858.88 211.798C2082.5 196.166 1778.29 910.415 1940.4 647.707C2102.5 384.999 3044 393.994 2387 196.996C1730 -0.00267792 2654.06 1524.99 2256.47 1298C1858.88 1071 2406.15 922.373 1940.4 839.118C1474.64 755.863 2121.44 978.966 1170.22 1199.48C218.999 1420 1351.3 985.612 881.652 615.039C412 244.466 610.52 1640.24 267.01 1169.37C-76.5003 698.495 538 443.997 219.999 322.562C-98.0017 201.126 1088.83 67.6171 750.622 244.466Z"
              stroke="#FF0000" strokeWidth="17" />
          </g>
          <defs>
            <filter id="filter0_f_red" x="0.510742" y="0.504883" width="2775.21" height="1479.1"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_131_384" />
            </filter>
          </defs>
        </svg>
        <svg className="bg-gray-clouds" fill="none" viewBox="0 0 2017.74 1452.44" width="100%" height="100%">
          <g filter="url(#filter0_f_gray)">
            <path
              d="M895.28 264.44C918.916 407.786 205 365.94 337.699 567.404M895.28 264.44C1329.53 234.072 1608.78 111.686 1723.2 343.44M895.28 264.44L995.199 496.44M337.699 567.404C891.668 492.376 1827.2 819.94 1283.8 964.911M337.699 567.404L205 879.723M1283.8 964.911C1873.7 1283.94 1886.03 837.71 1723.2 343.44M1283.8 964.911L1139.11 1247.44M1723.2 343.44L1739.61 657.297M995.199 496.44C644.899 568.46 1321.2 1086.44 205 879.723M995.199 496.44C1238.45 292.38 1446.19 370.992 1739.61 657.297M205 879.723C1066.7 1150.44 -171.39 1177.44 1139.11 1247.44M1139.11 1247.44C1144.36 629.211 1344.62 269.843 1739.61 657.297"
              stroke="white" strokeWidth="10" strokeLinejoin="round" />
          </g>
          <defs>
            <filter id="filter0_f_gray" x="0" y="0" width="2017.74" height="1452.44" filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_126_424" />
            </filter>
          </defs>
        </svg>
      </div>
      <MainMenu />
      <SpaceTravelBackground />
      {/* <TagCloudWrapper /> */}
    </div>
  );
}
