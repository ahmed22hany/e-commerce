import { CategoriesState, Category } from './index'
import type { PayloadAction } from '@reduxjs/toolkit'

const setCategories = (state: CategoriesState, action: PayloadAction<Category[]>) => {
    state.data = action.payload
}

export { setCategories }