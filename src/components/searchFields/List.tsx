import React, { useEffect } from 'react'
import { useGetCountryName } from '../../hooks/useGetCountryName'
import { CountrySelectedState } from '../../schema/CountrySelectedSchema'
import { useSetRecoilState } from "recoil";

interface ListsData {
    value: string
    label: string
}


function List({ input, setInputText }: { input: string, setInputText: any }) {
    const { countryNames, getCountryName, loading } = useGetCountryName()
    const setCountrySelectedState = useSetRecoilState(CountrySelectedState)

    useEffect(() => {
        if (input.length > 2) {
            getCountryName(input)
        }
    }, [input])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <ul>
            {countryNames?.map((item) => {
                return item.map(x => (
                    <li style={{ cursor: "pointer" }} onClick={(e: any) => { setCountrySelectedState(x); setInputText(x.label) }} key={x?.value}>{x?.label}</li>
                ))
            }
            )}
        </ul>
    )
}

export default List