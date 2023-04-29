import service from './MucleWiki.service';
import {Attributes, Exercise} from '../types';

export const getOptionsToFilter = async () => {
  try {
    const response = await service.get<Attributes>('/exercises/attributes');
    return response.data;
  } catch (e) {
    console.error(JSON.stringify(e, null, '\t'));
  }
};

export const getAllExercises = async () => {
  try {
    const response = await service.get<Exercise[]>('/exercises');
    return response.data;
  } catch (e) {
    console.error(JSON.stringify(e, null, '\t'));
  }
};

export const getExercisesById = async (id: string) => {
  try {
    const response = await service.get<Exercise>(`/exercises/${id}`);
    return response.data;
  } catch (e) {
    console.error(JSON.stringify(e, null, '\t'));
  }
};
