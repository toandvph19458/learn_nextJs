"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from './index.js'


export const Providers = ({ children }) => {
  return (
    <Provider store={store}>{ children }</Provider>
  )
} 