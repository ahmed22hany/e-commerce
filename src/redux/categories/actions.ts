import { CategoriesState } from './index'
import type { PayloadAction } from '@reduxjs/toolkit'

const setCategories = (state: CategoriesState, action: PayloadAction<string[]>) => {
    state.data = action.payload
}

export { setCategories }