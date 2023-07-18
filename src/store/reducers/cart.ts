import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Menu } from '../../pages/Profile'

type CartState = {
  items: Menu[]
  isOpen: boolean
  isOrderOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrderOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.find((item) => item.id === action.payload.id)
      const item = action.payload
      state.items.push({ ...item })
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openOrder: (state) => {
      state.isOrderOpen = true
    },
    closeOrder: (state) => {
      state.isOrderOpen = false
    }
  }
})

export const { add, remove, open, close, openOrder, closeOrder } =
  cartSlice.actions

export default cartSlice.reducer
