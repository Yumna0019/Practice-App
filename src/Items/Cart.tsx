import Menuitem from "./Menuitem";
const Cart = () => {
    return (  
        <section >
            <h1 className="flex justify-center text-3xl font-bold py-5">Cart</h1>
            <ul>
                <Menuitem item={{name: "Biryani", quality: 3}} />
                <Menuitem item={{name: "Kher", quality: 2}} />
                <Menuitem item={{name: "Halwa", quality: 1}} />
            </ul>
            <br />
        </section>
    );
}
 
export default Cart;