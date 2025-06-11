const timeline = document.getElementById('timeline');

export function addPost(text, latitude, longitude) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = 
        `<p>${text}</p>
        <p>Координаты: ${latitude}, ${longitude}</p>`;
    timeline.prepend(postElement);
}
