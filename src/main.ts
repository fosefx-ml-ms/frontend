const UPLOAD_URL = 'http://localhost:8080/';
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
    const body = new FormData();
    body.append('image', image);
    console.dir(body);
    const resp = await fetch(UPLOAD_URL, {
        method: 'POST',
        body
    });
    const json = await resp.json();
    alert(json.data.result);    
    // todo add to dom
}