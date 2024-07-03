// const mongoose = require('mongoose');

// const NoteSchema = new Schema({
//     title:{
//         type: String,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     tag:{
//         type: String,
//         default: "General"
//     },
//     date:{
//         type: Date,
//         required: Date.now
//     }
//   });

//   module.export = mongoose.model('notes', NoteSchema);



const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
