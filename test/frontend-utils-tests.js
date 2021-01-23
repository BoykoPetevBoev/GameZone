const expect = require('chai').expect;
const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = require('../src/utils/user');

const user = { shoppingCart: [], wishlist: [] };
const id = '123';

describe('Frontend Utils', () => {
    describe('addToCart', () => {
        it('Add new id', async () => {
            const result = await addToCart(id, user);
            expect(result).to.have.property('shoppingCart');
            expect(result.shoppingCart).to.deep.equal([ '123' ]);
        });
        it('Invalid inputs', async () => {
            expect(await addToCart(0, user)).to.equal(undefined);
            expect(await addToCart(id, [])).to.equal(undefined);
            expect(await addToCart(id, {shoppingCart: undefined})).to.equal(undefined);
        });
    });
    describe('removeFromCart', () => {
        it('Remove id', async () => {
            user.shoppingCart = [{_id: id}];
            const result = await removeFromCart(id, user);
            expect(result).to.have.property('shoppingCart');
            expect(result.shoppingCart).to.deep.equal([]);
        });
        it('Non existing id', async () => {
            user.shoppingCart = [{_id: 'abc'}];
            const result = await removeFromCart(id, user);
            expect(result).to.have.property('shoppingCart');
            expect(result.shoppingCart).to.deep.equal([{_id: 'abc'}]);
        });
        it('Invalid inputs', async () => {
            expect(await removeFromCart(0, user)).to.equal(undefined);
            expect(await removeFromCart(id, [])).to.equal(undefined);
            expect(await removeFromCart(id, {shoppingCart: undefined})).to.equal(undefined);
        });
    });
    describe('addToWishlist', () => {
        it('Add new id', async () =>{
            const result = await addToWishlist(id, user);
            expect(result).to.have.property('wishlist');
            expect(result.wishlist).to.deep.equal([ '123' ]);
        });
        it('Already added id', async () =>{
            user.wishlist = [{_id: id}];
            const result = await addToWishlist(id, user);
            expect(result).to.have.property('wishlist');
            expect(result.wishlist).to.deep.equal([{_id: id}]);
        });
        it('Invalid inputs', async () => {
            expect(await addToWishlist(0, user)).to.equal(undefined);
            expect(await addToWishlist(id, [])).to.equal(undefined);
            expect(await addToWishlist(id, {wishlist: undefined})).to.equal(undefined);
        });
    });
    describe('removeFromWishlist', () => {
        it('Remove id', async () => {
            user.wishlist = [{_id: id}];
            const result = await removeFromWishlist(id, user);
            expect(result).to.have.property('wishlist');
            expect(result.wishlist).to.deep.equal([]);
        });
        it('Non existing id', async () => {
            user.wishlist = [{_id: 'abc'}];
            const result = await removeFromWishlist(id, user);
            expect(result).to.have.property('wishlist');
            expect(result.wishlist).to.deep.equal([{_id: 'abc'}]);
        });
        it('Invalid inputs', async () => {
            expect(await removeFromWishlist(0, user)).to.equal(undefined);
            expect(await removeFromWishlist(id, [])).to.equal(undefined);
            expect(await removeFromWishlist(id, {wishlist: undefined})).to.equal(undefined);
        });
    });
});