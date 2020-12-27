import { useEffect, useState } from 'react'

export default function List(props: any): JSX.Element {
    let initial: number[] = [0, 1, 2]

    const [items, setItems] = useState(initial)

    useEffect(() => {
        setItems(props.getItems(5))
        console.log("Updating items")
    }, [props.getItems])
    return (
        <div>
            {items.map(item => <div>{item}</div>)}
        </div>
    )
}
