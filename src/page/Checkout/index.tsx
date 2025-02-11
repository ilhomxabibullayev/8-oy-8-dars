import GreenShop from '../../components/GreenShop';
import Like from '../../components/Like';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container checkout__container'>
            <h1>Billing Address</h1>
            <form id="billingForm" action="#" method="POST">
                <label htmlFor="firstName">First Name*</label>
                <input type="text" id="firstName" name="firstName" required />

                <label htmlFor="lastName">Last Name*</label>
                <input type="text" id="lastName" name="lastName" required />

                <label htmlFor="country">Country / Region*</label>
                <select id="country" name="country" required>
                    <option value="">Select a country/region</option>
                    <option value="US">United States</option>
                    <option value="SA">Saudi Arabia</option>
                </select>

                <label htmlFor="city">Town / City*</label>
                <input type="text" id="city" name="city" required />

                <label htmlFor="street">Street Address*</label>
                <input type="text" id="street" name="street" required />

                <label htmlFor="apartment">Apartment, Suite, Unit, etc. (Optional)</label>
                <input type="text" id="apartment" name="apartment" />

                <label htmlFor="state">State*</label>
                <select id="state" name="state" required>
                    <option value="">Select a state</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                </select>

                <label htmlFor="zip">Zip Code*</label>
                <input type="text" id="zip" name="zip" required />

                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" name="phone" pattern="^\+998\d{9}$" required />

                <label htmlFor="differentAddress">Ship to a different address?</label>
                <input type="checkbox" id="differentAddress" name="differentAddress" />

                <label htmlFor="orderNotes">Order Notes (Optional)</label>
                <textarea id="orderNotes" name="orderNotes"></textarea>

                <button type="submit">Submit</button>
            </form>

            <div id="formOutput"></div>

            <Like />
            <GreenShop />
        </div>
    );
};

export default Checkout;
