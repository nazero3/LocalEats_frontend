import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 560 560' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={280} cy={280} r={280} stroke='#E87F1E' strokeWidth={2} strokeDasharray='10 20' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
