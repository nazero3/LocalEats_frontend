import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_109_31)'>
      <circle cx={20} cy={20} r={20} fill='#54BF29' />
    </g>
    <path
      d='M20 26L14 20M20 26L26 20M20 26V14'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <filter
        id='filter0_d_109_31'
        x={-20}
        y={-10}
        width={80}
        height={80}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={10} />
        <feGaussianBlur stdDeviation={10} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.9625 0 0 0 0 0.925209 0 0 0 0 0.890312 0 0 0 1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_109_31' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_109_31' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
