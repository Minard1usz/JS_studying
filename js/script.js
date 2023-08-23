const textBlock = document.getElementById('text-block');
const note = document.getElementById('notif');

textBlock.addEventListener('focus', () => {
    note.style.display = 'block';
});

textBlock.addEventListener('blur', () => {
    note.style.display = 'none';
});