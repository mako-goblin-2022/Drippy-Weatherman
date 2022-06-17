import React from 'react'
import Navbar from './Navbar'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe(`<Navbar/>`, () => {
  it(`Ensure buttons are correctly named`, () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const initial = screen.getAllByRole('link')
    console.log(initial)
    expect(initial[1]).toContainHTML(`Wellington`)
  })
})
