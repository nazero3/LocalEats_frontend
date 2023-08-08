import { memo, SVGProps } from 'react';

const EllipseIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 94 94' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={47} cy={47} r={47} fill='#C4C4C4' />
  </svg>
);

const Memo = memo(EllipseIcon3);
export { Memo as EllipseIcon3 };
