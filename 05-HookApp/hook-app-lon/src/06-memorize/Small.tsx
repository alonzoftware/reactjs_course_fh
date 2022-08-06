// import {memo} from "react"
import React from "react"

interface iProps {
    value: number
}
export const Small = React.memo(({ value }: iProps) => {
    console.log('Render Again :(')
    return (
        <small>{value}</small>
    )
})
