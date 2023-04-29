import axios from 'axios';
import {getEnvMobile} from '../hooks/useFirebase/';

const {xRapidAPIHost, xRapidAPIKey} = getEnvMobile();
const MuscleApi = axios.create({
  baseURL: xRapidAPIHost,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': xRapidAPIKey,
  },
});

export default MuscleApi;
