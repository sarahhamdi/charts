import React from 'react';
import GraphContext from '../../Context'
import { Tooltip, PieChart, Pie } from 'recharts';

interface Props {
  children?: any
}

const Form = ({ children }: Props) => (
  <GraphContext.Consumer>
    {(value) => (
      <form>
        {children}
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Value:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )}
  </GraphContext.Consumer>
)

export default Form;
