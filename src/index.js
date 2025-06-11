import './styles.css';
import { addPost } from './components/Timeline';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('postInput');
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
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
    });
});

function parseCoordinates(input) {
    const regex = /^s*[?s*(-?d+.d+)s*,s*(-?d+.d+)s*]?s*$/;
    const match = input.match(regex);
    if (!match) throw new Error("Неверный формат координат");
    
    return {
        latitude: parseFloat(match[1]),
        longitude: parseFloat(match[2]),
    };
}
