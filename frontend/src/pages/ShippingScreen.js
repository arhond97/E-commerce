import {useDispatch, useSelector} from "react-redux";
import React, {Component, useEffect, useState} from "react";
import {saveAddress} from "../actions/cartActions";
import {getAddress} from "../actions/userActions";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function ShippingPage(props) {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const userAddressDetails = useSelector((state) => state.userAddressDetails);
    const {userAddress} = userAddressDetails;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('Kurier');
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const [agreed, setAgreed] = useState(false)
    const dispatch = useDispatch();
    const toPrice = (num) => Number(num.toFixed(2));
    const cartPrice = toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0));
    const deliveryPrice = cartPrice > 1000 ? toPrice(0) : toPrice(15);
    const totalPrice = deliveryMethod === 'Kurier' ? toPrice(cartPrice + deliveryPrice) : (cartPrice);
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(cartItems.length === 0){
           props.history.push('/cart');
        }
        if(userInfo){
            dispatch(getAddress(userInfo._id));
        }

        window.scrollTo(0, 0);

    }, [dispatch, userInfo]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveAddress({email,name, surname, address, state, city, zip, deliveryMethod, paymentMethod, agreed, cartPrice, deliveryPrice, totalPrice}));
        props.history.push('/summary');

    }


    const handleFill = () =>{
        if(userAddress){
            setName(userAddress.name);
            setSurname(userAddress.surname);
            setAddress(userAddress.address);
            setCity(userAddress.city);
            setState(userAddress.state);
            setZip(userAddress.zip);
            setEmail(userAddress.email);
        }
    }

    return (
        <>
            <Form onSubmit={submitHandler}>
                <Row className="mr-0">
                    <Col lg="6" className="ml-2">

                        <Container className="mt-5 mb-5 p-3 border border-dark">
                            <Row>
                                <Col lg="6">
                                    <div className="mb-5">
                                        <h2>1.Spos??b dostawy</h2>
                                    </div>
                                    <div className="ml-3">
                                        <input  type="radio" id="courier" value="Kurier" name="deliveryMethod" required defaultChecked  onChange={event => setDeliveryMethod(event.target.value)}/>
                                        <label htmlFor="courier">&nbsp;&nbsp;Kurier ({deliveryPrice === 0 ? (<><span style={{ textDecorationLine: 'line-through' }}>15.00</span>) {deliveryPrice.toFixed(2)} z??</>): <>{deliveryPrice.toFixed(2)} PLN)</>}</label>
                                    </div>
                                    <div className="ml-3">
                                        <Form.Check label="Odbi??r Osobisty" type="radio" id="saloon" value="Odbi??r Osobisty" name="deliveryMethod" required onChange={event => setDeliveryMethod(event.target.value)}/>

                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="mt-5 mb-5 p-3 border border-dark">
                            <Row>
                                <Col lg="6">
                                    <div className="mb-5">
                                        <h2>2.Metoda P??atno??ci</h2>
                                    </div>
                                    <div className="ml-3">
                                        <Form.Check label="PayPal" type="radio" id="paypal" value="PayPal" name="paymentMethod" required defaultChecked onChange={event => setPaymentMethod(event.target.value)}/>
                                        <Image src="../../../images/paypal.png" width="50%"/>
                                    </div>
                                    <div className="ml-3 mt-2">
                                        <Form.Check label="Got??wka przy odbiorze" type="radio" id="cash" value="Got??wka przy odbiorze" name="paymentMethod" required onChange={event => setPaymentMethod(event.target.value)}/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <Container  className="mt-5 mb-5 p-3 border border-dark">
                            <Row>
                                <Col lg="6">
                                    <div className="mb-3">
                                        <h2>3.Dane Adresowe</h2>
                                    </div>
                                    <div className="mb-3">
                                        <Button variant="outline-primary" onClick={handleFill}>Uzupe??nij danymi z konta</Button>
                                    </div>
                                    <div className="my-3">
                                        <Form.Label htmlFor="email">E-mail</Form.Label>
                                        <Form.Control type="text" id="email" placeholder="jan.kowalski@gmail.com" value={email} onChange={event => setEmail(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="my-3">
                                        <Form.Label htmlFor="name">Imi??</Form.Label>
                                        <Form.Control type="text" id="name" placeholder="Jan" value={name} onChange={event => setName(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="my-3">
                                        <Form.Label htmlFor="name">Nazwisko</Form.Label>
                                        <Form.Control type="text" id="surname" placeholder="Kowalski" value={surname} onChange={event => setSurname(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="my-3">
                                        <Form.Label htmlFor="address">Adres</Form.Label>
                                        <Form.Control type="text" id="address" placeholder="Prosta 2/3" value={address} onChange={event => setAddress(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="mt-3">
                                        <Form.Group controlId="formGridState">
                                            <Form.Label>Wojew??dztwo</Form.Label>
                                            <Form.Control as="select" defaultValue={state} value={state}  onChange={e => setState(e.target.value)} style={{borderRadius: '10px'}}>
                                                <option value="dolno??l??skie">dolno??l??skie</option>
                                                <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
                                                <option value="lubelskie">lubelskie</option>
                                                <option value="lubuskie">lubuskie</option>
                                                <option value="????dzkie">????dzkie</option>
                                                <option value="ma??opolskie">ma??opolskie</option>
                                                <option value="mazowieckie">mazowieckie</option>
                                                <option value="opolskie">opolskie</option>
                                                <option value="podkarpackie">podkarpackie</option>
                                                <option value="podlaskie">podlaskie</option>
                                                <option value="pomorskie">pomorskie</option>
                                                <option value="??l??skie">??l??skie</option>
                                                <option value="??wi??tokrzyskie">??wi??tokrzyskie</option>
                                                <option value="warmi??sko-mazurskie">warmi??sko-mazurskie</option>
                                                <option value="wielkopolskie">wielkopolskie</option>
                                                <option value="zachodniopomorksie">zachodniopomorksie</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Prosz?? wybra?? wojew??dztwo.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="mt-0">
                                        <Form.Label htmlFor="city">Miasto</Form.Label>
                                        <Form.Control type="text" id="city" placeholder="Warszawa" value={city} onChange={event => setCity(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="my-2">
                                        <Form.Label htmlFor="postalCode">Kod Pocztowy</Form.Label>
                                        <Form.Control type="text" id="postalCode" placeholder="00-001" value={zip} onChange={event => setZip(event.target.value)} required style={{borderRadius: '10px'}}/>
                                    </div>
                                    <div className="ml-1">
                                        <Form.Check label="Wyra??am zgod?? na przetwarzanie danych osobowych."  required onChange={e => setAgreed(e.target.checked)}/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col lg="4" className="mt-5">
                        <h2 className="text-center">Podsumowanie</h2>
                        <div className="bg-light p-3 mr-2">
                            <h6 className="text-center text-success">Przy zam??wieniach powy??ej 1000 z?? dostawa GRATIS!</h6>
                            <Row className="mt-4">
                                <Col lg="5">
                                    <h4 className="text-center">Koszyk:</h4>
                                </Col>
                                <Col lg="7">
                                    <h3 className="text-center">{cartPrice.toFixed(2)} z??</h3>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg="5">
                                    <h4 className="text-center">Dostawa:</h4>
                                </Col>
                                <Col lg="7">
                                    <h3 className="text-center">{deliveryMethod === 'Kurier' ? deliveryPrice.toFixed(2) : '0.00'} z??</h3>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg="5">
                                    <h4 className="text-center">Razem:</h4>
                                </Col>
                                <Col lg="7">
                                    <h3 className="text-center">{deliveryMethod === 'Kurier' ? (cartPrice + deliveryPrice).toFixed(2): cartPrice.toFixed(2) } z??</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <Button variant="success" type="submit" size="lg" className="mt-5 text-lg mb-3" block>
                                        Z?????? Zam??wienie
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/product"  style={{textDecoration: 'none'}}>
                                        <Button variant="outline-dark" size="lg" className="text-lg mb-5" block>
                                            Kontynuuj Zakupy
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Form>


        </>
    )
}