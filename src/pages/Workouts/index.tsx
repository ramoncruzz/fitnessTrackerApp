import * as React from 'react';
import {Div, Text} from 'react-native-magnus';

import {trackPageView} from '../../utils/trackTestID';
import {Exercise} from '../../types';
import {getAllExercises} from '../../services/MucleWiki.api';

const namePageForTesting = 'workouts';
const Workout: React.FC = (): JSX.Element => {
  const [exercises, setExercises] = React.useState<Exercise[]>([]);

  React.useEffect(() => {
    getAllExercises().then(response => setExercises(response));
  }, []);

  return (
    <Div
      testID={trackPageView(namePageForTesting, 'page')}
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="indigo100">
      <Text fontWeight="bold" fontSize={15}>
        All Exercises available on MuscleWiki RestFull Api
      </Text>
      <Div h="80%" alignItems="center" justifyContent="center">
        <Text fontWeight="500" fontSize={10}>
          {JSON.stringify(exercises, null, '\t')}
        </Text>
      </Div>
    </Div>
  );
};

export default Workout;
