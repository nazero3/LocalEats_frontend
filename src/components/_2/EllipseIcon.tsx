import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 101 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={50.3699} cy={50.3699} r={50.3699} fill='#C4C4C4' />
  </svg>
);

const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
