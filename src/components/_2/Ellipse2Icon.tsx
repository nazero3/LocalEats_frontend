import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1177 1177' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={588.5} cy={588.5} r={588.5} fill='#EAFFE2' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
