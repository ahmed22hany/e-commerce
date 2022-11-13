import { createSlice } from '@reduxjs/toolkit'
import { setCategories } from './actions'

export interface CategoriesState {
    data: string[]
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