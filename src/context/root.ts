import { createContext } from 'react';
import RootStore from '../store/root';

export const RootStoreContext = createContext<RootStore | null>(null);
