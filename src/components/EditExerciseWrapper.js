// src/components/EditExerciseWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';
import EditExercise from './edit-exercise.component';

const EditExerciseWrapper = () => {
  const { id } = useParams();
  return <EditExercise exerciseId={id} />;
};

export default EditExerciseWrapper;
