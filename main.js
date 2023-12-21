document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing camera:', error);
        });

    function capturePicture() {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const pictureDataUrl = canvas.toDataURL('image/jpeg');
        downloadPicture(pictureDataUrl);
    }

    function downloadPicture(dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'natasha_birthday_picture.jpg';
        link.click();
    }
});
