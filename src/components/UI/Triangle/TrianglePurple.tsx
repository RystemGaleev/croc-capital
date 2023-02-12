import style from './TrianglePurple.module.scss';

export const TrianglePurple = () => {
  return (
    <div className={style.trianglePurple}>
      <svg
        width="164"
        height="164"
        viewBox="0 0 164 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bdf_876_3)">
          <path
            d="M140.324 6.86876C144.785 5.67333 148.868 9.75581 147.673 14.2172L112.706 144.714C111.511 149.175 105.934 150.669 102.668 147.404L7.1378 51.8734C3.87181 48.6074 5.36611 43.0306 9.82753 41.8352L140.324 6.86876Z"
            fill="#E741BC"
          />
        </g>
        <defs>
          <filter
            id="filter0_bdf_876_3"
            x="-0.623047"
            y="0.657959"
            width="164.506"
            height="162.507"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_876_3"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.195833 0 0 0 0 0.0677257 0 0 0 0 0.162649 0 0 0 0.57 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_876_3"
              result="effect2_dropShadow_876_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_876_3"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.5"
              result="effect3_foregroundBlur_876_3"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
