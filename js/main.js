(() => {
  //grab all the buttons and store them in a variable
  const playButtons = document.querySelectorAll('.playTrack'),
        pauseButtons = document.querySelectorAll('.pauseTrack'),
        rwButtons = document.querySelectorAll('.rwTrack'),
        audioElement = document.querySelector('#jukebox');

  function loadTrack() {
    //debugger;

    //what audio track do we want? -> this is set on the button
    let audioSource = `audio/${this.dataset.trackref}.mp3`;

//set the src attribute for the auio element
    audioElement.src = audioSource;

    // load the mp3 into the audio element, and play it
    audioElement.load();
    playTrack();
  }

  function playTrack(){
    audioElement.play();
  }

  function pauseTrack() {
    audioElement.pause();
  }

  function rwTrack() {
    audioElement.currentTime = 0;
  }


  playButtons.forEach(button => button.addEventListener('click', loadTrack));
  pauseButtons.forEach(button => button.addEventListener('click', pauseTrack));
  rwButtons.forEach(button => button.addEventListener('click', rwTrack));

})()

