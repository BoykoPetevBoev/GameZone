import React from 'react';
import styles from './index.module.css';

function ProductForm() {
    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Category:</label>
                        <select>
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
                        <input type="text"  name="model" />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text"  name="price" />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" name="image" />
                    </div>
                    <div>
                        <label>Second Image</label>
                        <input type="text" name="imageTwo" />
                    </div>

                    <button type="submit" name="id">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ProductForm