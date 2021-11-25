import { type } from 'os';
import { Brand } from '../../@types/intex';
import './style.css';

type BrandProps = {
    items: Array<Brand>
}
export function Brands(props: BrandProps) {
    return (

        <div className="brands">
            <ul>
                {props.items.map(item =>{
                    return (
                        <li><img src={item.source} alt={item.alt} /></li>
                    )
                })}
                <li><img src="" alt="" /></li>
                <li><img src="assets/images/brand4.png" alt="" /></li>
                <li><img src="assets/images/brand5.png" alt="" /></li>
            </ul>
        </div>
    );
}