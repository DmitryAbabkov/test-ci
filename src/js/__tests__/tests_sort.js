import sortHealth from '../arr_sort_health';

test('testing sort health', () => {
    const res = sortHealth([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
]);
    const expectedOutput = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    expect(res).toEqual(expectedOutput);
});