const expect = require('chai').expect;
const { hashPassword, checkPassword } = require('../backend/utils/hashHandler');
const { setToken, verifyToken } = require('../backend/utils/authHandler');
const Product = require('../backend/models/Product');
const User = require('../backend/models/User');

describe('Models', () => {
    describe('User Model', () => {
        const user = new User({
            firstName: 'test',
            lastName: 'test',
            email: 'test',
            password: 'test'
        });
        it('First name', () => {
            expect(user).to.have.property('firstName');
            expect(user.firstName).to.be.a('string');
            expect(user.firstName).to.equal('test');
        });
        it('Last name', () => {
            expect(user).to.have.property('lastName');
            expect(user.lastName).to.be.a('string');
            expect(user.lastName).to.equal('test');
        });
        it('Email', () => {
            expect(user).to.have.property('email');
            expect(user.email).to.be.a('string');
            expect(user.email).to.equal('test');
        });
        it('Password', () => {
            expect(user).to.have.property('password');
            expect(user.password).to.be.a('string');
            expect(user.password).to.equal('test');
        });
        it('Phone', () => {
            expect(user).to.have.property('phone');
            expect(user.phone).to.equal(null);
        });
        it('Address', () => {
            expect(user).to.have.property('address');
            expect(user.address).to.be.a('string');
            expect(user.address).to.equal('');
        });
        it('Shopping cart', () => {
            expect(user).to.have.property('shoppingCart');
            expect(user.shoppingCart).to.be.a('array');
            expect(user.shoppingCart).to.have.lengthOf(0);
        });
        it('Wishlist', () => {
            expect(user).to.have.property('wishlist');
            expect(user.wishlist).to.be.a('array');
            expect(user.wishlist).to.have.lengthOf(0);
        });
    });
    describe('Product Model', () => {
        const product = new Product({
            category: 'test',
            brand: 'test',
            model: 'test',
            price: 0,
            images: ['test'],
            description: 'test',
            characteristics: [['test', 'test']]
        });
        it('Category', () => {
            expect(product).to.have.property('category');
            expect(product.category).to.equal('test');
            expect(product.category).to.be.a('string');
        });
        it('Brand', () => {
            expect(product).to.have.property('brand');
            expect(product.brand).to.equal('test');
            expect(product.brand).to.be.a('string');
        });
        it('Model', () => {
            expect(product).to.have.property('model');
            expect(product.model).to.equal('test');
            expect(product.model).to.be.a('string');
        });
        it('Price', () => {
            expect(product).to.have.property('price');
            expect(product.price).to.equal('0');
            expect(product.price).to.be.a('string');
        });
        it('Images', () => {
            expect(product).to.have.property('images');
            expect(product.images).to.have.lengthOf(1);
            expect(product.images).to.be.a('array');
        });
        it('Description', () => {
            expect(product).to.have.property('description');
            expect(product.description).to.equal('test');
            expect(product.description).to.be.a('string');
        });
        it('Characteristics', () => {
            expect(product).to.have.property('characteristics');
            expect(product.characteristics).to.have.lengthOf(1);
            expect(product.characteristics[0]).to.have.lengthOf(2);
            expect(product.characteristics).to.be.a('array');
        })
    });
});

describe('Utils Functions', () => {

    describe('Hash password tests', () => {
        describe('fn: hashPassword', () => {
            it('Length is 60', () => {
                expect(hashPassword('123')).to.have.lengthOf(60);
            });
            it('Type is string', () => {
                expect(typeof hashPassword('123')).to.equal('string');
            })
            it('Wrong input', () => {
                expect(hashPassword(undefined)).to.equal(undefined);
            })
        });
        describe('fn: checkPassword', () => {
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
        describe('fn: setToken', () => {
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
        describe('fn: verifyToken', () => {
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
});