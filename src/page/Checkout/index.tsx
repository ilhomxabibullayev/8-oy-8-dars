import { NavLink } from 'react-router';
import GreenShop from '../../components/GreenShop';
import Like from '../../components/Like';
import './Checkout.css'
import Button from '../../assets/icon/button.svg'

const Checkout = () => {
    return (
        <>
            <div className='checkout'>
                <div className='container checkout__container'>
                    <div className='checkout__content'>
                        <NavLink className='checkout__link' to='/'>Home</NavLink>
                        <p>/</p>
                        <NavLink className='checkout__link' to='/shop'>Shop</NavLink>
                        <p>/</p>
                        <NavLink className='checkout__link' to='/checkout'>Checkout</NavLink>
                    </div>
                    <div className='checkout__content2'>
                        <form className="checkout__form">
                            <h2 className="checkout__title">Billing Address</h2>

                            <div className='checkout__groups'>
                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="first-name">First Name</label>
                                    <input className='checkout__input' type="text" id="first-name" name="first-name" required />
                                </div>

                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="last-name">Last Name</label>
                                    <input className='checkout__input' type="text" id="last-name" name="last-name" />
                                </div>
                            </div>

                            <div className='checkout__groups'>
                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="country">Country / Region</label>
                                    <input className='checkout__input' type="text" id="country" name="country" required placeholder="Select a country / region" />
                                </div>

                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="town-city">Town / City</label>
                                    <input className='checkout__input' type="text" id="town-city" name="town-city" />
                                </div>
                            </div>

                            <div className='checkout__groups'>
                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="street-address">Street Address</label>
                                    <input className='checkout__input' type="text" id="street-address" name="street-address" required placeholder="YHouse number and street name" />
                                </div>

                                <div className="checkout__group">
                                    <input className='checkout__input' type="text" id="apartment" name="apartment" placeholder="Apartment, suite, unit, etc. (optional)" />
                                </div>
                            </div>

                            <div className='checkout__groups'>
                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="state">State</label>
                                    <input className='checkout__input' type="text" id="state" name="state" required placeholder="Select a state" />
                                </div>

                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="zip">Zip</label>
                                    <input className='checkout__input' type="text" id="zip" name="zip" required placeholder="Your zip code" />
                                </div>
                            </div>

                            <div className='checkout__groups'>
                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="email">Email Address</label>
                                    <input className='checkout__input' type="email" id="email" name="email" required placeholder="Your email address" />
                                </div>

                                <div className="checkout__group">
                                    <label className='checkout__label' htmlFor="phone">Phone Number</label>
                                    <input className='checkout__input' type="tel" id="phone" name="phone" required placeholder="Your phone number" />
                                </div>
                            </div>

                            <div className="checkout__group2">
                                <button className='checkout__btn' type="submit">
                                    <img src={Button} alt="Submit Button" />
                                </button>
                                <label htmlFor="ship-different-address">Ship to a different address?</label>
                            </div>

                            <div className="checkout__group">
                                <label className='checkout__label' htmlFor="order-notes">Order Notes (optional)</label>
                                <input className='checkout__input2' type="text" id="order-notes" name="order-notes" />
                            </div>
                        </form>
                    </div>
                    <Like />
                    <GreenShop />
                </div>
            </div>
        </>
    );
};

export default Checkout;
