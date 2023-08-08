import { memo, SVGProps } from 'react';

const EllipseIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 282 282' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={141.056} cy={141.059} r={140.097} fill='#C4C4C4' />
  </svg>
);

const Memo = memo(EllipseIcon12);
export { Memo as EllipseIcon12 };
