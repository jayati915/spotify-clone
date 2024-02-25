//user model

const mongoose = require("mongoose");

const Song = new mongoose.SchemaType({
  name: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const SongModel = mongoose.Model("Song", Song);
module.exports = SongModel;
