import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

/** useCheckout Hook - 
* 
*/

const checkoutState = {
    // Interestingly, this code  was spat out by Github CoPilot.  😁
    cart: {
        items: [],
    },
    ui: {
        step: 1,
        isLoading: false,
        error: null,
    },
    customer: {
        billing_address: {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        },
        payment: {
            method_id: '',
            method_title: '',
            paid: false,
            transaction_id: null,
        },
        shipping_lines: [],
        fee_lines: [],
        taxes: [],
        customer_id: null,
        customer_ip_address: null,
        customer_user_agent: null,
        created_via: 'checkout',
        date_completed: null,
        date_paid: null,
        cart_hash: null,
        order_key: null,
        meta_data: [],
        currency: 'USD',
    }
}

const useCheckout = () => {
    const [ state, setState ] = useState(checkoutState)
    const [ localStorage, setLocalStorage ] = useState()

    const STORAGE_KEY = '_STORAGE_'

    useEffect(() => {
        // useEffect #1 - On load, lets grab any localStorage cart from a potential previous session a returning user had.
        // If we're a returning visitor, we'll want to grab our previous cart, saved in localStorage. Ift not, let's create a localStorage cart.

        // TODO: Instead of dumping localstorage into state blindly (which is a bad idea), we should be able to use the cart from localStorage, and merge it with the cart in state - with checks.
        // TODO: Don't include businesslogic-dependent state restore from localStorage or cookies, just the cart. Also, don't include customer details.

        if (typeof window !== 'undefined') {
            const cartStorage = window.localStorage.getItem(STORAGE_KEY) // Checks localStorage for our cart.

            // if no existing Cart is stored then create and store the default, empty cart.
            if (!cartStorage) {
                console.log('No localStorage - Creating')
                const local = { id: uuidv4(), ...state }
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(local))

                setLocalStorage(local)
            } else {
                const localCart = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
                console.log('Found Local Storage:', localCart)
                setLocalStorage(JSON.parse(window.localStorage.getItem(STORAGE_KEY)))

                setState(prev => ({ ...prev, cart: localCart }))
            }
        }
    }, [])


    const test = (params) => {
        console.log('I am a test')
        return true
    }

    return { state, test }
}

export default useCheckout
