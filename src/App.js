import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import CartProvider from './store/cart-context';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {setCartIsShown(true)};
    const hideCartHandler = () => {setCartIsShown(false)};

    return (
        <CartProvider className="App">
            {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler} />
            <HomePage />
        </CartProvider>
    );
}

export default App;
