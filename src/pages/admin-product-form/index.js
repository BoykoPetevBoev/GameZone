import React, { Component, useState, useContext } from 'react';
import styles from './index.module.css';
import Navigation from '../../components/admin-navigation';
import SubmitBitton from '../../components/user-submit-button';
import Input from '../../components/user-input';
import ImageHolder from '../../components/product-images';
import ProductImages from '../../components/product-images';
import ProductInfo from '../../components/product-info';

function Product() {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);
    const [characteristic, setCharacteristic] = useState('');
    const [characteristics, setCharacteristics] = useState([]);

    const [categoryError, setCategoryError] = useState(null);
    const [brandError, setBrandError] = useState(null);
    const [modelError, setModelError] = useState(null);
    const [priceError, setPriceError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    const [imagesError, setImagesError] = useState(null);
    const [characteristicsError, setCharacteristicsError] = useState(null);

    const addNewImage = () => {
        if (!image) {
            return;
        }
        const array = [...images, image];
        setImages(array);
        setImage('');
        console.log(images);
    }
    const addNewCharacteristic = () => {
        console.log(characteristics);
        if (!characteristic || !characteristic.includes('-')) {
            return;
        }

        const array = [...characteristics, characteristic.split('-')];
        setCharacteristics(array);
        setCharacteristic('');
    }

    return (
        <div>
            <Navigation />
            <div className={styles.container}>
                <div>

                    <div>

                        <select name="category" value={category}>
                            <option value=''>Choose a category</option>
                            <option value="mouse">Mouse</option>
                            <option value="keyboard">Keyboard</option>
                            <option value="headset">Headset</option>
                            <option value="mousepad">Mousepad</option>
                            <option value="accessoaries">Accessoaries</option>
                        </select>

                        <input
                            name='brand'
                            className={styles['product-name']}
                            type='text'
                            placeholder='Brand...'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        >
                        </input>
                        <input
                            name='model'
                            className={styles['product-name']}
                            type='text'
                            placeholder='Model...'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        >
                        </input>
                        <input
                            name='price'
                            className={styles['product-name']}
                            type='text'
                            placeholder='Price...'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </input>
                    </div>

                    <div>
                        <input
                            name='image'
                            className={styles['product-img-input']}
                            type='text'
                            placeholder='Image URL...'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        ></input>
                        <button onClick={addNewImage} className={styles['product-img-button']}>ADD</button>
                    </div>

                    <div>
                        <input
                            name='characteristic'
                            className={styles['product-img-input']}
                            type='text'
                            placeholder='characteristic...'
                            value={characteristic}
                            onChange={(e) => setCharacteristic(e.target.value)}
                        ></input>
                        <button onClick={addNewCharacteristic} className={styles['product-img-button']}>ADD</button>
                    </div>

                    <textarea
                        placeholder="Description..."
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className={styles.textarea}
                    ></textarea>


                </div>

                <ProductImages images={images} />
                <ProductInfo
                    brand={brand}
                    model={model}
                    description={description}
                    price={price}
                />
            </div>
        </div>
    )
}

// class ProductForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             category: '',
//             categoryError: '',
//             brand: '',
//             brandError: null,
//             model: '',
//             modelError: null,
//             price: '',
//             priceError: null,
//             firstImage: '',
//             firstImageError: null,
//             secondImage: '',
//             secondImageError: null,
//             details: '',
//             detailsError: null
//         }

//     }
//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//     validateForm = () => {
//         this.setState({
//             categoryError: null,
//             brandError: null,
//             modelError: null,
//             priceError: null,
//             firstImageError: null,
//             secondImageError: null,
//             detailsError: null
//         })
//         const { category, brand, model, price, firstImage, secondImage, details } = this.state;
//         let result = true;
//         if (category === '') {
//             console.log(category);
//             this.setState({
//                 categoryError: 'Invalid category!'
//             });
//             result = false;
//         }
//         if (brand === '') {
//             this.setState({
//                 brandError: 'Brand name is required!'
//             });
//             result = false;
//         }
//         if (model === '') {
//             this.setState({
//                 modelError: 'Model name is required!'
//             });
//             result = false;
//         }
//         if (price === '' || isNaN(Number(price))) {
//             this.setState({
//                 priceError: 'Price must be a number!'
//             });
//             result = false;
//         }
//         if (firstImage === '' || !firstImage.startsWith('https://')) {
//             this.setState({
//                 firstImageError: 'First Image must start with "https://"'
//             });
//             result = false;
//         }
//         if (secondImage === '' || !secondImage.startsWith('https://')) {
//             this.setState({
//                 secondImageError: 'Second Image must start with "https://"'
//             });
//             result = false;
//         }
//         if (details === '' || details.length < 10) {
//             this.setState({
//                 detailsError: 'Details must be at least 10 characters long!'
//             });
//             result = false;
//         }
//         return result;
//     }
//     formHandler = async () => {
//         const product = this.state;
//         const url = 'http://localhost:5000/add-product';
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(product)
//         });
//         console.log(response);
//         this.props.history.push('/');
//     }
//     onSubmit = (e) => {
//         e.preventDefault();
//         const isValid = this.validateForm();
//         if (isValid) {
//             this.formHandler();
//         }
//     }
//     render() {
//         const {
//             category,
//             categoryError,
//             brand,
//             brandError,
//             model,
//             modelError,
//             price,
//             priceError,
//             firstImage,
//             firstImageError,
//             secondImage,
//             secondImageError,
//             details,
//             detailsError
//         } = this.state

//         return (
//             <div>
//                 <Navigation />
//                 <form className={styles.form} onSubmit={this.onSubmit}>

//                     <div className={styles.line}>
//                         <label htmlFor="productType">Category:</label>
//                         <div className={styles['field-wrap']}>
//                             <p className={styles['err-line']}>
//                                 {categoryError ? categoryError : null}
//                             </p>
//                             <select className={categoryError ? styles['select-err'] : styles.select} name="category" onChange={this.onChange} value={category}>
//                                 <option value=''>Choose a category</option>
//                                 <option value="mouse">Mouse</option>
//                                 <option value="keyboard">Keyboard</option>
//                                 <option value="headset">Headset</option>
//                                 <option value="mousepad">Mousepad</option>
//                                 <option value="accessoaries">Accessoaries</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className={styles.line}>
//                         <label>Brand Name</label>
//                         <Input
//                             name="brand"
//                             err={brandError}
//                             type="text"
//                             placeholder=""
//                             value={brand}
//                             onChange={this.onChange}
//                         />
//                     </div>

//                     <div className={styles.line}>
//                         <label>Model Name</label>
//                         <Input
//                             name="model"
//                             err={modelError}
//                             type="text"
//                             placeholder=""
//                             value={model}
//                             onChange={this.onChange}
//                         />
//                     </div>

//                     <div className={styles.line}>
//                         <label>Price</label>
//                         <Input
//                             name="price"
//                             err={priceError}
//                             type="text"
//                             placeholder=""
//                             value={price}
//                             onChange={this.onChange}
//                         />
//                     </div>

//                     <div className={styles.line}>
//                         <label>First Image</label>
//                         <Input
//                             name="firstImage"
//                             err={firstImageError}
//                             type="text"
//                             placeholder=""
//                             value={firstImage}
//                             onChange={this.onChange}
//                         />
//                     </div>

//                     <div className={styles.line}>
//                         <label>Second Image</label>
//                         <Input
//                             name="secondImage"
//                             err={secondImageError}
//                             type="text"
//                             placeholder=""
//                             value={secondImage}
//                             onChange={this.onChange}
//                         />
//                     </div>

//                     <div className={styles['textarea-line']}>
//                         <label>Details</label>
//                         <div className={styles['field-wrap']}>
//                             <p className={styles['err-line']}>
//                                 {detailsError ? detailsError : null}
//                             </p>
//                             <textarea className={detailsError ? styles['textarea-err'] : styles.textarea} name="details" onChange={this.onChange} value={details}></textarea>
//                         </div>
//                     </div>

//                     <SubmitBitton value="Add Product" />

//                 </form>
//             </div>
//         )
//     }
// }



export default Product