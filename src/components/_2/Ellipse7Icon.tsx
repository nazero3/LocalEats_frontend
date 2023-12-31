import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 8C6 6.34315 3 0.5 3 0.5C3 0.5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11C4.65685 11 6 9.65685 6 8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
