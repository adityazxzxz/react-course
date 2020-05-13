const add = (a,b) => a + b;
const gretingName = (name) => `Hallo ${name}!`;

test('harus 2 angka',() => {
    const result = add(1,1);
    expect(result).toBe(2);
})

// test('Greetng memunculkan nama',() => {
//     const result = gretingName('Adit');
//     expect(result).toBe('Hallo Adit!');
// })