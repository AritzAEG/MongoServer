const Workout = require('../database/Workout');

const getAllWorkouts = async () => {
  try
  {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  }
  catch (error)
  {
    throw error;
  }
};

const createNewWorkout = async (newWorkout) => {
  try
  {
    const createdWorkout = Workout.createNewWorkout(newWorkout);
    return createdWorkout;
  }
  catch (error)
  {
    throw error;
  }
};

module.exports = {getAllWorkouts, createNewWorkout};