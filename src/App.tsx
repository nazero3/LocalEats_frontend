import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _2 } from './components/_2/_2.js';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_2 />
    </div>
  );
});
