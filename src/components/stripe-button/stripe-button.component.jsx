import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IYXb2HcESpgmybSdrvs6UlCTrJz1Lk7ZFtx68WehstHGioNiFYDIInOeuRSthmv6yPtZ6tVhQ2QNAKzukBybJIW00UfNkbEHY';

    const onToken = token => {console.log(token); alert('Payment Sucessful');}

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is € ${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;