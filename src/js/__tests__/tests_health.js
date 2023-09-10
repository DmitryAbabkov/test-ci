import healthyUser from '../index';

test('Checking level health', () => {
    const res = healthyUser({name: 'Mark', health: 51});
    expect(res).toEqual('healthy');
})

test('Checking level wounded', () => {
    const res = healthyUser({name: 'Mark', health: 49});
    expect(res).toEqual('wounded');
})

test('Checking level critical', () => {
    const res = healthyUser({name: 'Mark', health: 14});
    expect(res).toEqual('critical');
})