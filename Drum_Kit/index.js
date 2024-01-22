window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio || !key) {
        return;
    }

    audio.currentTime = 0; // Reset audio to the beginning
    audio.play();

    key.classList.add('playing');

    setTimeout(() => {
        key.classList.remove('playing');
    }, 70);
});
