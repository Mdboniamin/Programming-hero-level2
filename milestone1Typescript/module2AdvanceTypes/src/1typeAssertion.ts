let anything: any;

anything = 222;

(anything as number).toFixed(2); // 222.00

const kgToGMConverter = (input: string | number) => {
    if(typeof input === 'number') {
        return input * 1000;
    } else if(typeof input === 'string') {
        const [value] = input.split(' ');
        return `Converted output is: ${Number(value) * 1000}`;
    }
}

const result1 = kgToGMConverter(2); // 2000
console.log(result1);
const result2 = kgToGMConverter('2 kg'); // "Converted output is: 2000"
console.log(result2);