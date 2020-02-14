(() => {
  //grab all the buttons and store them in a variable
  const button = document.querySelectorAll('button'),
        audioElement = document.querySelector('#jukebox');

  function playTrack() {
    //debugger;

    //what audio track do we want? -> this is set on the button
    let audioSource = `audio/${this.dataset.trackref}.mp3`;

//set the src attribute for the auio element
    audioElement.src = audioSource;

    // load the mp3 into the audio element, and play it
    audioElement.load();
    audioElement.play()
  }


  button.forEach(button => button.addEventListener("click", playTrack));
})()
