import { useEffect } from 'react'

export default function useLogger(item: string) {
    useEffect(() => {
        console.log(item)
    }, [item])
}
