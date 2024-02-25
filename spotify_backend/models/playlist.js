//user model

const mongoose = require("mongoose");

const Playlist = new mongoose.SchemaType({
  name: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "song",
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

const PlaylistModel = mongoose.Model("Playlist", Playlist);
module.exports = PlaylistModel;
