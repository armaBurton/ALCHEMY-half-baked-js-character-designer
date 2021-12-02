// IMPORT MODULES under test here:
import { makeStatsString } from '../script/utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `451`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
