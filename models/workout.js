const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // resistance: weight, sets, reps
    //cadio: type, distance, duration
    //common: nameu

    // date for every exercise
    // the date is now, so dynamically create that
    
    date: {
        default: new Date(Date.now())
    },
    //this ia exercise
    exercise : [{
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter an amount"
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number
    }
    }]
   
    // hint: might neeed to change to JSON formot
});

var myExercise = JSON.stringify(exercise)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;