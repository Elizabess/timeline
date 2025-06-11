import { parseCoordinates } from '../index';

describe('parseCoordinates', () => {
    test('Парсит координаты с пробелами', () => {
        expect(parseCoordinates('51.50851, −0.12572')).toEqual({ latitude: 51.50851, longitude: -0.12572 });
    });

    test('Парсит координаты без пробелов', () => {
        expect(parseCoordinates('51.50851,−0.12572')).toEqual({ latitude: 51.50851, longitude: -0.12572 });
    });

    test('Парсит координаты в квадратных скобках', () => {
        expect(parseCoordinates('[51.50851, −0.12572]')).toEqual({ latitude: 51.50851, longitude: -0.12572 });
    });

    test('Выдает ошибку для неверного формата', () => {
        expect(() => parseCoordinates('invalid coordinates')).toThrow("Неверный формат координат");
    });
});
