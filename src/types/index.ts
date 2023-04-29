type target = {
  Primary: string[];
  Secondary?: string[];
};
export type Exercise = {
  Category: string;
  Difficulty: string;
  Force: string;
  Grips: string;
  details: string;
  exerciseame: string;
  id: number;
  steps: string[];
  target: target;
  videoURL: string[];
  youtubeURL: string;
};

export type Attributes = {
  categories: string[];
  difficulties: string[];
  forces: string[];
  muscles: string[];
};

export type Workout = {
  exercises: Exercise[];
  totalSeasons: number;
  totalDone: number;
};
export type User = {
  name: string;
  email: string;
  Workouts: Workout[];
};
