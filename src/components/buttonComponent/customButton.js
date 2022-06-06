import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export const CustomButton = (props)=>{

    const {btnLabelText,className,handleButton} = props;

    return (
        <Button className={className} onClick={handleButton}>{btnLabelText}</Button>
    )
}