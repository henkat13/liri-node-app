console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID, 
  secret: process.env.SPOTIFY_SECRET 
};
exports.OMDB ={
  key: process.env.OMDB_API_KEY
};
exports.bands = {
  key: process.env.BANDS_API_KEY
}