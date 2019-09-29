const UPLOAD_URL = 'https://idaf.com/';
const ALLOWED_MIMES = ['images/png', 'images/jpeg'];
const submitUploadButton = document.getElementById('submit-upload') as HTMLButtonElement;
const fileUploadInput = document.getElementById('image-upload') as HTMLInputElement;
submitUploadButton.addEventListener('click', () => {   
    const files = fileUploadInput.files as FileList;
    if (files.length === 0) {
        alert('You must select a file first');
        return;
    }
    const imageFile: File = files[0];
    debugger;
    if (ALLOWED_MIMES.find(m => m === imageFile.type) === null) {
        alert('Currently only supporting png and jpeg images. Try another one!');
        return;
    }
    sendToServer(imageFile);
});

async function sendToServer(image: File) {
    await fetch(UPLOAD_URL, {
        // todo
    });
    // todo add to dom
}