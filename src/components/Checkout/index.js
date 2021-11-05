import useCheckout from '@hooks/useCheckout'
import React, { useContext } from 'react'

export const Checkout = () => {
    const checkout = useCheckout()
    return (
        <div>
            <div className="container">
                <h1>Checkout</h1>
                <p>
                    {JSON.stringify(checkout)}
                </p>
            </div>

        </div>
    )
}
