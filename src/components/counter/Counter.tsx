import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import CounterStore from '../../store/counter';

import styles from './Counter.module.css';

export const Counter: FC = observer(() => {
  const { count, increment, decrement } = CounterStore;

  return (
    <div className={styles.counter}>
      <button
        onClick={() => decrement(1)}
        className={styles.button}
      >
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button
        onClick={() => increment(1)}
        className={styles.button}
      >
        +
      </button>
    </div>
  );
});
