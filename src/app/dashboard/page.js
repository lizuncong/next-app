import { memo } from "react";
import Button from './_components/button'
const DashBoard = memo(() => {
    return <div>dashboard<Button></Button></div>
})

DashBoard.displayName = 'DashBoard'
export default DashBoard