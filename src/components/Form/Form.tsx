import React, { FormEvent } from 'react';
import GraphContext from '../../Context'
import { Tooltip, PieChart, Pie } from 'recharts';

interface Data {
  name: string,
  value: string
}

interface State {
  data: Data[],
  error: string,
  index?: number,
  disabled: boolean
}

interface Event {
  target: { 
    value: HTMLScriptElement[],
    name: HTMLScriptElement[],
    querySelectorAll: (element: string) => void
  },
  preventDefault: () => void
}


class Form extends React.Component {
  state: State = {
    data: [],
    error: '',
    disabled: true
  }

  // nameChange = (i: number, event: Event) => {
  //   let form = this.state.form[i];
  //   form = { name: event.target.value, value: this.state.form[i].value };
  //   this.setState({ form });
  // }

  // onChange = (event: Event) => this.setState({ if });

  onSubmit = (e: any) => {
    e.preventDefault()
    const valueName: HTMLInputElement[] = e.target.name;
    const valueNum: HTMLInputElement[] = e.target.value;
    const name: string[] = [];
    const num: string[] = [];
    let data: Data[] = [];
    console.log(e.target.value)
    // iterate over inputs + push to array
    valueName.forEach((n: any) => name.push(n.value))
    valueNum.forEach((n: any) => num.push(n.value))
    // create big data array to use in charts
    name.forEach((n, i) => {
      if (n === '') {
        this.setState({ index: i, error: 'there was an error' })
        console.log({ n })
      } else {
        data.push({
          name: n,
          value: num[i]
        })
      }
    })

    // data.forEach((item, index) => {
    //   if (item.name === '' || item.value === '') {
    //     this.setState({ index, error: 'Please add a ' })
    //   }
    // })

    // clear empty pairs
    // data = data.filter((item) => item.name !== '' && item.value !== '')

    this.setState({ data })
  }

  render() {
    return (
      <GraphContext.Consumer>
        {(value) => (
          <form onSubmit={this.onSubmit}>
            <label>
              Name:
              <input key={0} type="text" name="name" />
            </label>
            <label>
              Value:
              <input key={1} type="text" name="value" />
            </label>
            <label>
              Name:
              <input key={2} type="text" name="name" />
            </label>
            <label>
              Value:
              <input key={3} type="text" name="value" />
            </label>
            <input type="submit" value="Submit" />
            {this.state.error && <p>{this.state.error}</p>}
            <p onClick={() => value.data([{ name: 'string', value: 55 }, { name: 'another', value: 65 }])} >test</p>
          </form>
        )}
      </GraphContext.Consumer >
    )
  }
}

export default Form;
