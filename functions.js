
let extModule = require('./extModule');

module.exports = {
    add: (a, b) => {
        return a + b;
    },
    isNull: () => { return null },
    checkValue: (val) => { return val },
    createUser: () => {
        const user = { firstName: 'Dan' };
        user['lastName'] = 'Smith';
        return user;
    },
    returnMSafterMS: async (timeout) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timeout);
            }, timeout);
        })
    },
    rejectAfterMS: async (timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(timeout);
            }, timeout);
        })
    },
    interactWithExtModule: () => {
        return extModule.main();
    }
}