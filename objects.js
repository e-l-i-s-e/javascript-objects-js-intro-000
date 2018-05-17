<<<<<<< HEAD
var playlist = {
  'Slowdive' : 'Alison',
  'My Bloody Valentine' : 'Sometimes'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName] : songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
=======
var playlist = {Dylan : "A Hard Rain"}
function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({object}, {[artistName] : songTitle})
>>>>>>> aaf2ede457343a23bd56e3d18e71d7fd5af951f6
}
