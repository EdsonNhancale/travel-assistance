import { atom } from "recoil"
import { z } from "zod"

export const countrySelected = z.object({
    label: z.string(),
    value: z.string()
})

type CountrySelected = z.infer<typeof countrySelected>

export const CountrySelectedState = atom<CountrySelected>({
    key: "CountrySelected-state",
    default: {
        label: "",
        value: ""
    }
})
