import { memo } from "react";

const Button = memo(() => {
    return <div>button</div>
})

Button.displayName = 'Button'
export default Button