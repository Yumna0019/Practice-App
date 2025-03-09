type Props = {
    item: {
        name : string;
        quality : number;
    }
}

const Menuitem = (props:Props) => {
    return (  // now render items that need to show on screen
    <>
        <li className="flex gap-4 text-xl justify-between">
            <h2>{props.item.name}</h2>
            <span>{props.item.quality}</span>
        </li>
    </> );
}
 
export default Menuitem;

// passing prop menuitems in cart.tsx