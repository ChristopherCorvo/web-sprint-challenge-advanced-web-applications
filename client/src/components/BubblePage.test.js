import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { mockFetchData } from '../util/mockFetchData'
jest.mock('../util/mockFetchData.js')

const fakeData = {
  data: [
          { color: 'TestColor1', code: {hex: '#000000'}, id: 20},
          { color: 'TestColor2', code: {hex: '#222222'}, id: 21},
        ]
}

test("Fetches data and renders the bubbles", async () => {
  // Arrange:
  mockFetchData.mockResolvedValueOnce(fakeData)
  
  //Assert
  const { getByText, getAllByTestId } = render(<BubblePage/>)

  await waitFor(()=>{
    expect(getByText('TestColor1')).toBeInTheDocument()
    expect(getAllByTestId('color')).toHaveLength(2)
  })
});
