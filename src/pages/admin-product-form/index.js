import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import AdminInput from '../../components/admin-input';
import AdminFormWrapper from '../../components/admin-from-wrapper';
import { addProduct, updateProduct, deleteProduct } from '../../utils/requester';
import AdminWrapper from '../../components/admin-wrapper';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getProduct } from '../../utils/requester';

function Product(props) {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);
    const [characteristic, setCharacteristic] = useState('');
    const [characteristics, setCharacteristics] = useState([]);
    const [error, setError] = useState(true);
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        if (match.params.id) {
            const loadData = async () => {
                const data = await getProduct(match.params.id);
                setCategory(data.category);
                setBrand(data.brand);
                setModel(data.model);
                setPrice(data.price);
                setDescription(data.description);
                setImages(data.images);
                if (data.characteristic) {
                    setCharacteristics(data.characteristics);
                }
            }
            loadData();
        }
    }, [match]);

    const addNewImage = () => {
        if (!image) {
            return;
        }
        const array = [...images, image];
        setImages(array);
        setImage('');
    }

    const addNewCharacteristic = () => {
        if (!characteristic || !characteristic.includes('-')) {
            return;
        }
        const array = [...characteristics, characteristic.split('-')];
        setCharacteristics(array);
        setCharacteristic('');
    }
    const removeProduct = async () => {
        await deleteProduct(match.params.id);
        history.push('/');
    }

    const validateForm = () => {
        if (category === '') {
            setError('Invalid category!');
        }
        else if (brand === '') {
            setError('Brand name is required!');
        }
        else if (model === '') {
            setError('Model name is required!');
        }
        else if (price === '' || isNaN(Number(price))) {
            setError('Price must be a number!');
        }
        else if (images.length === 0) {
            setError('There is no images!');
        }
        else if (description === '' || description.length < 10) {
            setError('Description must be at least 10 characters long!');
        }
        else if (characteristics.length === 0) {
            setError('There is no characteristics!');
        }
        else {
            setError(false);
        }
    }

    const formHandler = async () => {
        const product = {
            category,
            brand,
            model,
            price,
            description,
            images,
            characteristics
        }
        if (match.params.id) {
            product.id = match.params.id
            await updateProduct(product);
        }
        else {
            addProduct(product);
        }

        history.push('/');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validateForm();
        if (!error) {
            formHandler();
        }
    }

    return (
        <AdminWrapper>
            <AdminFormWrapper
                error={error}
                images={images}
                brand={brand}
                model={model}
                description={description}
                characteristics={characteristics}
                price={price}
            >
                <form className={styles.form} onSubmit={onSubmit}>

                    <div className={styles['form-elements']}>
                        <AdminInput
                            name='brand'
                            type='text'
                            placeholder='Brand...'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                        <AdminInput
                            name='model'
                            className={styles['product-name']}
                            type='text'
                            placeholder='Model...'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                        <AdminInput
                            name='price'
                            className={styles['product-name']}
                            type='text'
                            placeholder='Price...'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-elements']}>
                        <div>
                            <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                                <option value=''>Choose a category</option>
                                <option value="mouse">Mouse</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="headset">Headset</option>
                                <option value="mousepad">Mousepad</option>
                                <option value="accessories">Accessoaries</option>
                            </select>
                        </div>
                        <div>

                            <input
                                name='image'
                                className={styles['product-input']}
                                type='text'
                                placeholder='Image URL...'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></input>
                            <button type='button' onClick={addNewImage} className={styles['input-button']}>ADD</button>
                        </div>

                        <div>

                            <input
                                name='characteristic'
                                className={styles['product-input']}
                                type='text'
                                placeholder='Characteristic...'
                                value={characteristic}
                                onChange={(e) => setCharacteristic(e.target.value)}
                            ></input>
                            <button type='button' onClick={addNewCharacteristic} className={styles['input-button']}>ADD</button>
                        </div>


                    </div>

                    <div className={styles['form-elements']}>
                        <textarea
                            placeholder="Description..."
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    <div className={styles['submit-btn-holder']}>
                        <button type='submit'>Submit</button>
                    </div>
                    {match.params.id
                        ?
                        <div className={styles['submit-btn-holder']}>
                            <button type='button' onClick={removeProduct} value={match.params.id} >Delete Product</button>
                        </div>
                        : null
                    }
                </form>
            </AdminFormWrapper>
        </AdminWrapper>

    )
}

export default Product




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
//             : '',
//             : null,
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
//             : null,
//             secondImageError: null,
//             detailsError: null
//         })
//         const { category, brand, model, price, , secondImage, details } = this.state;
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
//         if ( === '' || !.startsWith('https://')) {
//             this.setState({
//                 : 'First Image must start with "https://"'
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
//             ,
//             ,
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
//                             name=""
//                             err={}
//                             type="text"
//                             placeholder=""
//                             value={}
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


