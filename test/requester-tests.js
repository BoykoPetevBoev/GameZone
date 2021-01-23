const expect = require('chai').expect;
const { userLogin, userRegister, getAllProducts, getAllUsers, addProduct } = require('../src/utils/requester');
const User = require('../backend/models/User');

describe('User Tests', () => {
    describe('userLogin', () => {
        it('Have all properties', async () => {
            const body = { email: "test@test.com", password: '123' };
            const user = await userLogin(body);
            expect(user).to.have.property('_id');
            expect(user).to.have.property('email').to.equal('test@test.com');
            expect(user).to.have.property('firstName').to.equal('Boyko');
            expect(user).to.have.property('lastName').to.equal('Boev');
            expect(user).to.have.property('password').with.lengthOf(60);
            expect(user).to.have.property('phone');
            expect(user).to.have.property('address');
            expect(user).to.have.property('shoppingCart').with.lengthOf(0);
            expect(user).to.have.property('wishlist').with.lengthOf(0);
        });
        it('Invalid body', async () => {
            const user = await userLogin(undefined);
            expect(user).to.equal(undefined);
        });
        it('Empty body params', async () => {
            const user = await userLogin({});
            expect(user).to.equal(undefined);
        });
    });
    describe('userRegister', async () => {

        // it('Have all properties', async () => {
        //     const body = {
        //         firstName: 'Boyko',
        //         lastName: 'Boev',
        //         email: "test@register.com",
        //         password: '123'
        //     }
        //     const user = await userRegister(body);
        //     const del = await User.deleteOne({ email: user.email });
        //     console.log(del);

        //     expect(user).to.have.property('_id');
        //     expect(user).to.have.property('email').to.equal('test@register.com');
        //     expect(user).to.have.property('firstName').to.equal('Boyko');
        //     expect(user).to.have.property('lastName').to.equal('Boev');
        //     expect(user).to.have.property('password').with.lengthOf(60);
        //     expect(user).to.have.property('phone');
        //     expect(user).to.have.property('address');
        //     expect(user).to.have.property('shoppingCart').with.lengthOf(0);
        //     expect(user).to.have.property('wishlist').with.lengthOf(0);
        // });
        it('Invalid body params', async () => {
            expect(await userRegister({})).to.equal(undefined);
        });
        it('Invalid body', async () => {
            expect(await userRegister(undefined)).to.equal(undefined);
        });
    });
    describe('getAllUsers', () => {
        it('Return array', async () => {
            const data = await getAllUsers();
            expect(data).to.be.an('array');
        });
    });
});

describe('Product Tests', () => {
    describe('getAllProducts', () => {
        it('Return array', async () => {
            const data = await getAllProducts();
            expect(data).to.be.an('array');
        });
    });
    // describe('addProduct', () => {
    //     it('Add product', async () => {
    //         const body = { 
    //             price: 0,
    //             category: 'test', 
    //             brand: 'test', 
    //             model: 'test',
    //             images: 'test', 
    //             description: 'test', 
    //             characteristics: 'test' }
    //         const res = await addProduct('body');
    //         expect(res).to.have.property('price')
    //         expect(res).to.have.property('category')
    //         expect(res).to.have.property('brand')
    //         expect(res).to.have.property('model')
    //         expect(res).to.have.property('images')
    //         expect(res).to.have.property('description')
    //         expect(res).to.have.property('characteristics')
    //     });
    // });
});
