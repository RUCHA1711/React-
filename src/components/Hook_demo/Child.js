
import { memo } from 'react'

const Child = (props) => {
    console.log('child render')
    return (
        <>
            <h1> Hey {props.message}</h1>
        </>
    )
}
export default memo(Child)