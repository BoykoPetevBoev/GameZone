const expect = require('chai').expect;
const Product = require('../backend/models/Product');
const User = require('../backend/models/User');

describe('Models Tests', () => {
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
        });
    });
});