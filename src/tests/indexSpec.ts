import { myFunc } from '../index';

describe('Sample function', () => {
    it('should multiply 5 by 5 and returns 25', () => {
        expect(myFunc(5)).toEqual(25);
    });
});
