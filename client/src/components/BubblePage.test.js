import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { mockFetchData } from '../util/mockFetchData'
jest.mock('../util/mockFetchData.js')

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // Arrange:
  render(<BubblePage/>)
  // create some dummy data

  // Act
  mockFetchData.mockResolvedValueOnce({
    data: [
      { color: 'TestColor1', code: {hex: '#000000'}},
      { color: 'TestColor2', code: {hex: '#222222'}},
    ]
  })
  
  //Assert

  await waitFor(()=>{
    const colorList = screen.getByText('TestColor1')
    expect(colorList).toHaveLength(1)
  })
});
