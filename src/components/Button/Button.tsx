import { useState } from 'react'
import './Button.css'

type Props = {
    name: string;
}
function Button({ name }: Props) {
    const [count, setCount] = useState(0)

    const onClickHandler = () => {
        setCount((count) => count + 1);
        console.log('Button Click Handler....', count);
    };

    return (
        <>
            <button className='button' onClick={onClickHandler}>
                {name}
            </button>
        </>
    )
}

export default Button
