import { useContext } from 'react';

import { RootStoreContext } from '../context/root';

export const useStore = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error('Error!');
  }

  return context;
};
