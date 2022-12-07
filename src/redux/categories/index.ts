import { createSlice } from '@reduxjs/toolkit'
import { setCategories } from './actions'

export type Category = {
    id: number
    name: string
    attribute: string[] | null
}

export interface CategoriesState {
    data: Category[]
}

const initialState: CategoriesState = {
    data: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories
    },
})

// Action creators are generated for each case reducer function
export const { setCategories: setCategoriesAction } = categoriesSlice.actions

export default categoriesSlice.reducer