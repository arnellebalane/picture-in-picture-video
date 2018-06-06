const video = document.querySelector('video');
const button = document.querySelector('button');

if (!document.pictureInPictureEnabled) {
    button.disabled = true;
    button.textContent = 'PiP is not supported in your browser';
}
if (video.disablePictureInPicture) {
    button.disabled = true;
    button.textContent = 'PiP is currently disabled';
}

button.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(console.error);
    } else {
        video.requestPictureInPicture().catch(console.error);
    }
});

video.addEventListener('enterpictureinpicture', () => {
    button.textContent = 'Exit Picture-in-Picture';
});

video.addEventListener('leavepictureinpicture', () => {
    button.textContent = 'Enter Picture-in-Picture';
});
