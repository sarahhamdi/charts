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
  color1: string,
  color2: string,
  dataPie?: dataPie[],
  dataBar?: dataBar[],
  dataLine?: dataBar[]
}

export default React.createContext<GraphContext>({
  color1: '',
  color2: '',
  dataPie: [{ name: '', value: 0 }],
  dataBar: [{ name: '', uv: 0, pv: 0, amt: 0 }],
  dataLine: [{ name: '', uv: 0, pv: 0, amt: 0 }]
})