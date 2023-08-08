import { memo, SVGProps } from 'react';

const EllipseIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 109 109' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={54.4492} cy={54.4492} r={54.4492} fill='#C4C4C4' />
  </svg>
);

const Memo = memo(EllipseIcon11);
export { Memo as EllipseIcon11 };
