import express from 'express';

export const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

export const myFunc = (num: number) => {
    return num * num;
};

// Concatenate two arrays

export const concatArr = (
    arr1: (string | number)[],
    arr2: (string | number)[]
): (string | number)[] => {
    return [...arr1, ...arr2];
};

// Add numbers in an array

export const addArr = (arr: number[]): number => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};

// Find the largest number in an array
export const lgNum = (arr: (string | number)[]): number => {
    let largest = 0 as number;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x as number;
        }
    });
    return largest;
};

// Remove the 3rd item from an array
export const cut3 = (arr: (string | number)[]): (string | number)[] => {
    arr.splice(2, 1);
    return arr;
};

// multiply

export const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};

// add
export const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

// divide
export const divide = (num1: number, num2: number): number => {
    return num1 / num2;
};

// subtract
export const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
};

// square
export const square = (num: number): number => {
    return num * num;
};

export const concat = (str1: string, str2: string): string => {
    return str1 + str2;
};

export const capitalize = (str: string): string => {
    const newStr = str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
    return newStr;
};

export const upperCase = (str: string): string => {
    return str.toUpperCase();
};

export const lowerCase = (str: string): string => {
    return str.toLowerCase();
};
