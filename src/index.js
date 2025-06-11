import './styles.css';
import { addPost } from './components/Timeline';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('postInput');
    input.addEventListener('keypress', handleKeyPress);
});

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addNewPost();
    }
}

function addNewPost() {
    const input = document.getElementById('postInput');
    const text = input.value;
    if (text) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                addPost(text, latitude, longitude);
                input.value = '';
            },
            () => {
                const manualCoords = prompt("Введите координаты (широта, долгота):");
                try {
                    const coords = parseCoordinates(manualCoords);
                    addPost(text, coords.latitude, coords.longitude);
                    input.value = '';
                } catch (error) {
                    alert(error.message);
                }
            }
        );
    }
}

function parseCoordinates(input) {
    const regex = /^s*(-?d+(.d+)?)s*,s*(-?d+(.d+)?)s*$/;
    const match = input.match(regex);
    if (!match) throw new Error("Неверный формат координат");
    
    return {
        latitude: parseFloat(match[1]),
        longitude: parseFloat(match[3]),
    };
}
