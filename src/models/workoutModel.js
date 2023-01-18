const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  Nombre: String,
  Velocidad: String,
  Latitude: String,
  Longitude: String
});

module.exports = mongoose.model('Workout', workoutSchema);