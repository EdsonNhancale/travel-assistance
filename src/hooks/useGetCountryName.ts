import { useState } from 'react';
import { requests } from "../requests"

interface ListsData {
    value: string
    label: string
}

export const useGetCountryName = () => {
    const [loading, setloading] = useState(false)
    const [countryNames, setCountryNames] = useState<ListsData[][]>([])

    async function getCountryName(country: string) {
        setloading(true)
        const values = await requests().findCountryName(country)

        setCountryNames(formatData(values?.data))
        setloading(false)
    }

    return {
        getCountryName,
        loading,
        countryNames
    }
}


function formatData(data: any[][]): ListsData[][] {
    return data.map((item: any) => {
        return item.map((x: any) => {
            return {
                value: x.value,
                label: x.label
            }
        }
        )
    })
}
