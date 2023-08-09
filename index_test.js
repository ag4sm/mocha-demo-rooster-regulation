import { equal, throws } from 'assert';
import { announceDawn, timeAtDawn } from '../index';

describe('defines a new Rooster object', () => {
    describe('announces dawn', () => {
        it('returns a rooster call', () => {
        // Setup
            const expected = 'cock a doodle doo!';
    
        // Exercise
            const actual = announceDawn();
        // Verify
            equal(actual,expected);
        });
    });

    describe('time at dawn', () => {
        it('returns its argument as a string', () => {
    
        // Setup
            const inputNumber = 11;
            const expected = '11';
    
        // Exercise
            const actual = timeAtDawn(inputNumber);
    
        // Verify
            equal(actual, expected);
        });

        it('throws a range error when passed number less than 0', () => {
        // Setup
            const inputNumber = -1;
            const expected = RangeError;

        // Verify
            throws(() => {
            timeAtDawn(inputNumber);
            }, expected);
        });
        it('throws a range error when passed number above 23', () => {
        // Setup
            const inputNumber = 24;
            const expected = RangeError;
        // Verify
            throws(() => {
            timeAtDawn(inputNumber);
            }, expected);
        });
    });
});