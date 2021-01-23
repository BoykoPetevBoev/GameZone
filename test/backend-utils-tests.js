const expect = require('chai').expect;
const { hashPassword, checkPassword } = require('../backend/utils/hashHandler');
const { setToken, verifyToken } = require('../backend/utils/authHandler');
const Product = require('../backend/models/Product');
const User = require('../backend/models/User');

describe('Hash password tests', () => {
    describe('hashPassword', () => {
        it('Length is 60', () => {
            expect(hashPassword('123')).to.have.lengthOf(60);
        });
        it('Type is string', () => {
            expect(typeof hashPassword('123')).to.equal('string');
        });
        it('Wrong input', () => {
            expect(hashPassword(undefined)).to.equal(undefined);
        });
    });
    describe('checkPassword', () => {
        const hash = hashPassword('123');
        it('Right passowrd', async () => {
            expect(await checkPassword('123', hash)).to.equal(true);
        });
        it('Wrong passowrd', async () => {
            expect(await checkPassword('', hash)).to.equal(false);
        });
        it('Wrong inputs', async () => {
            expect(await checkPassword(undefined, hash)).to.equal(undefined);
            expect(await checkPassword('123', undefined)).to.equal(undefined);
        });
    });
});

describe('JSON Web Token tests', () => {
    const user = { _id: '123', email: 'test@test.com' }
    describe('setToken', () => {
        it('Token is string', () => {
            expect(typeof setToken(user)).to.equal('string');
        });
        it('Invalid user input', () => {
            expect(typeof setToken({})).to.equal('string');
        });
        it('Have three parts separated by "."', () => {
            expect(setToken({}).split('.')).to.have.lengthOf(3);
        });
    })
    describe('verifyToken', () => {
        const token = setToken(user);
        it('Have right id', () => {
            expect(verifyToken(token)).to.have.property('id').to.equal('123');
        });
        it('Have right email', () => {
            expect(verifyToken(token)).to.have.property('email').to.equal('test@test.com');
        });
        it('Invalid input token', () => {
            expect(verifyToken(undefined)).to.equal(undefined);
        });
    });
});