import React from 'react';
import styles from './index.module.css';
import Navigation from '../../components/navigation-admin';

function ProductForm() {
    return (
        <div className={styles.container}>
            <Navigation />
            <form id="addProduct" action="#/productForm" method="POST">

                <div>
                    <label for="productType">Category:</label>
                    <select class="form-control" name="category">
                        <option value="mouse">Mouse</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="headset">Headset</option>
                        <option value="mousepad">Mousepad</option>
                        <option value="accessoaries">Accessoaries</option>
                    </select>
                </div>

                <div>
                    <label>Brand Name</label>
                    <input type="text" name="brand" />
                </div>
                <div>
                    <label>Model Name</label>
                    <input type="text" name="model" />
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" name="price" />
                </div>
                <div class="form-group ">
                    <label>Image</label>
                    <input type="text" name="image" />
                </div>
                <div class="form-group ">
                    <label>Second Image</label>
                    <input type="text" name="imageTwo" />
                </div>

                <div>
                    <label>More Info</label>
                    <textarea name="moreInfo" id="" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" class="btn" name="id">Submit</button>

            </form>
        </div>
    )
}

export default ProductForm