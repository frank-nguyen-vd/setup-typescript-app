import supertest from 'supertest';
import * as sut from '../index';

const request = supertest(sut.app);

describe('An example of a multi-layered test suite', () => {
    xdescribe('Test endpoint responses', () => {
        it('gets the api endpoint', async (done) => {
            const response = await request.get('/api');
            expect(response.status).toBe(200);
            done();
        });
    });

    describe('Sample function', () => {
        it('should multiply 5 by 5 and returns 25', () => {
            expect(sut.myFunc(5)).toEqual(25);
        });
    });
});

describe('Function capitalize()', () => {
    it('should capitalize a string', () => {
        expect(sut.capitalize('a sentence')).toEqual('A Sentence');
    });
    it('should allow sentence to remain capitalized', () => {
        expect(sut.capitalize('A Sentence')).toEqual('A Sentence');
    });
});

describe('Mathematic operations', () => {
    describe('Function sum()', () => {
        it('should be a sum greater than 10', () => {
            expect(sut.sum(3, 10)).toBeGreaterThan(10);
        });
        it('should be a sum less than 10', () => {
            expect(sut.sum(-3, 10)).toBeLessThan(10);
        });
    });

    describe('Function multiply()', () => {
        it('should multiply 3 by 5 and be 15', () => {
            expect(sut.multiply(3, 5)).toBe(15);
        });
        it('should multiply 0 by 5 to be falsy', () => {
            expect(sut.multiply(0, 5)).toBeFalsy();
        });
    });
});

fdescribe('Array functions', () => {
    let numArr: number[];
    let wordArr: string[];

    beforeEach(() => {
        numArr = [3, 4, 5, 6];
    });

    afterEach(() => {
        numArr = [];
    });

    beforeAll(() => {
        wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    });

    afterAll(() => {
        wordArr = [];
    });

    describe('Function addArr()', () => {
        it('should add numbers in array and be truthy', () => {
            expect(sut.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', () => {
            expect(sut.addArr(numArr)).toBe(18);
        });
    });

    describe('Function concatArr()', () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(sut.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(sut.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });

    describe('Function cut3()', () => {
        it('should contain 3 items except rabbit', () => {
            expect(sut.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(sut.cut3(wordArr)).not.toContain('rabbit');
        });
    });

    describe('Function lgNum()', () => {
        it('should have 6 be largest number', () => {
            expect(sut.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(sut.lgNum(wordArr)).toBeFalsy();
        });
    });
});
