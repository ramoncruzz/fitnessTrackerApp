import {createContext} from 'react';
import {Attributes, Exercise, User} from '../types';
import {envMobile} from '../hooks/useFirebase/types';

export interface ContextType {
  UserData: User;
  FilterData: Attributes;
  AvailableExercises: Exercise[];
  env?: envMobile;
}
export const defaultValue: ContextType = {
  UserData: {
    name: 'Ramon',
    email: 'ramon.cruz.comercial@gmail.com',
    Workouts: [],
  },
  AvailableExercises: [],
  FilterData: {categories: [], difficulties: [], forces: [], muscles: []},
  env: undefined,
};
const AppContext = createContext<ContextType>(defaultValue);

export {AppContext};
