const express = require("express");
const app = express();

app.use(express.json());

// Get Song Array - talk about good taste in music, huh?
let songs = [
  {
    id: 1,
    name: "Estrada da Vida",
    link: "https://www.cifraclub.com.br/milionario-e-jose-rico/estrada-da-vida/",
  },
  {
    id: 2,
    name: "Boate Azul",
    link: "https://www.cifraclub.com.br/bruno-e-marrone/boate-azul/",
  },
  {
    id: 3,
    name: "Everybody Wants to Rule the World",
    link: "https://www.cifraclub.com.br/tears-for-fears/everybody-wants-to-rule-the-world/",
  },
];

// Show all songs
app.get("/songs", (req, res) => {
  return res.json(songs);
});

// Show specific song
app.get("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const song = songs.find((item) => item.id === id);
  const status = song ? 200 : 404;

  // Debugging stuff
  console.log("GET : : /songs/:id", song);

  return res.status(status).json(song);
});

// Add new object
app.post("/songs", (req, res) => {
  const { name, link } = req.body;
  const id = songs[songs.length - 1].id + 1;

  const newSong = { id, name, link };
  songs.push(newSong);

  // Console messages
  console.log("POST :: /songs", newSong);
  console.log("New song added.");

  return res.status(201).json(newSong);
});

// Updating Song
app.put("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, link } = req.body;

  // Search for existing index
  const index = songs.findIndex((item) => item.id === id);
  const status = index ? 200 : 404;

  if (index > 0) {
    songs[index] = { id: parseInt(id), name, link };
  }
});

// Delete Element
app.delete("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = songs.findIndex((item) => item.id === id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    songs.splice(index, 1);
  }

  return res.status(status).json();
});

app.listen(8080);
