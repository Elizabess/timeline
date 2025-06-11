const timeline = document.getElementById('timeline');

export function addPost(text, latitude, longitude) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = 
        `<p>${text}</p>
        <p>Координаты: ${latitude}, ${longitude}</p>`;
    
    // Добавляем обработчик события клика
    postElement.addEventListener('click', () => {
        alert("Вы кликнули на пост: ${text}");
    });

    timeline.prepend(postElement);
}
