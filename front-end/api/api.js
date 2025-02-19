import axios from "axios";

const URL = "https://spotify-clone-production-6e2d.up.railway.app";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

