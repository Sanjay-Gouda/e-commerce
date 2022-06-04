import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export const CustomButton = (props)=>{

    const {btnLabelText,className,handleAddtoCart} = props;

    return (
        <Button className={className} onClick={handleAddtoCart}>{btnLabelText}</Button>
    )
}