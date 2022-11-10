const functions = require('./functions');
const extModule = require('./extModule');

describe('basic tests', () => {
    test('Adds 2+2 to equal 4', () => {
        expect(functions.add(2, 2)).toBe(4);
    });
    
    test('Adds 2+2 to NOT equal 7', () => {
        expect(functions.add(2, 2)).not.toBe(7);
    });
});


describe('advanced tests', () => {
    test('Should be null', () => {
        expect(functions.isNull()).toBeNull();
    });
    
    test('Should be falsy', () => {
        expect(functions.checkValue(undefined)).toBeFalsy();
    })
    
    test('Should not be falsy', () => {
        expect(functions.checkValue(2)).not.toBeFalsy();
    });
})

test('User should be Dan Smith object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Dan',
        lastName: 'Smith'
    })
})

test('Should be under or equal 274', () => {
    expect(functions.add(100, 174)).toBeLessThanOrEqual(274);
});

test('Should return 1000 after 1000 ms', async () => {
    expect(await functions.returnMSafterMS(1000)).toBe(1000);
});

test('Should reject with 1000 after 1000ms', async () => {
    // expect.assertions(1); // guarantees certain number of assertions (expects) are called before finishing test
    // await expect((async () => { throw new Error('some error')})()).rejects.toThrow();
    await expect(functions.rejectAfterMS(1000)).rejects.toBe(1000);
});

test('Should return value from mocked extModule.main', () => {
    jest.spyOn(extModule, 'main').mockImplementationOnce(() => { return 554 });
    // jest.spyOn(extModule, 'main').mockReturnValueOnce(554);
    // extModule.main = jest.fn(() => { return 554 }) // this seems to be equivalent to mockImplementation. cannot be mockRestored()
    // jest.fn seems to be better when you're looking to test the behavior of a fn when it is passed in to another function to be tested
    expect(functions.interactWithExtModule()).toBe(554);
})

test('Should return value from extModule.main', () => {
    expect(functions.interactWithExtModule()).toBe(274);
})



// describe("[unit of work]", () => {
//     it("should [expected behaviour] when [scenario/context]", () => {});
// });

// describe("[unit of work]", () => {
//     describe("when [scenario/context]", () => {
//         it("should [expected behaviour]", () => {});
//     });
// });