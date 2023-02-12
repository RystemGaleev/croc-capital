import style from './TriangleBlue.module.scss';

export const TriangleBlue = () => {
  return (
    <div className={style.triangleBlue}>
      <svg
        className="triangle-blue"
        width="165"
        height="163"
        viewBox="0 0 165 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bdf_876_4)">
          <path
            d="M140.881 6.32933C145.342 5.1339 149.425 9.21638 148.229 13.6778L113.263 144.174C112.067 148.636 106.491 150.13 103.225 146.864L7.69444 51.334C4.42845 48.068 5.92275 42.4912 10.3842 41.2958L140.881 6.32933Z"
            fill="#3C7EFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_bdf_876_4"
            x="-0.0664062"
            y="0.118408"
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
              result="effect1_backgroundBlur_876_4"
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
              values="0 0 0 0 0.104167 0 0 0 0 0.174679 0 0 0 0 0.3125 0 0 0 0.48 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_876_4"
              result="effect2_dropShadow_876_4"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_876_4"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.5"
              result="effect3_foregroundBlur_876_4"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
