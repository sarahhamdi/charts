import React from 'react';
interface dataPie {
  name: string,
  value: number
}

interface dataBar {
  name: string,
  uv: number, 
  pv: number, 
  amt: number
}

export type GraphContext = {
  colors: string[]
  dataPie?: dataPie[],
  dataBar?: dataBar[],
  dataLine?: dataBar[]
}

// not sure why i have to define all these default values here...
// am i misunderstanding something about createContext + ts?
export default React.createContext<GraphContext>({
  colors: [],
  dataPie: [{ name: '', value: 0 }],
  dataBar: [{ name: '', uv: 0, pv: 0, amt: 0 }],
  dataLine: [{ name: '', uv: 0, pv: 0, amt: 0 }] 
})