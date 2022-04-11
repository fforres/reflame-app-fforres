import { Button } from './components/button.js'
import { styled } from './theme/index.js'
// import { styled } from "@stitches/react"

const Button2 = styled("button", {
    color: "blue"
})

export const Root = () => {
    // globalStyles()
    return <div>
        Hellos {" "}
        <Button text={"qqqads"} />
        <Button2>qqqadssss</Button2>
    </div>
}