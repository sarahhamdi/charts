import React from 'react';

type GraphContext = {
  theme: string,
  test?: number
}

export default React.createContext<GraphContext>({
  theme: '',
  test: 42
})