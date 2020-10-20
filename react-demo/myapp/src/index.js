import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

// import _ from 'lodash'

// const fun = (a, b, c) => a + b + c

// const fun_curr = _.curry(fun)

// console.log(fun_curr(1,2,3))
// console.log(fun_curr(1) === fun)
// console.log(fun_curr(1)(2)(3))

// const reverse = arr => arr.reverse()
// const first = arr => arr[0]
// const upperCase = str => str.toLocaleUpperCase()

// const foo = _.flowRight(upperCase, first, reverse)

// console.log(foo(['hh', 'ff', 'ee']))
// console.log(foo(['hh', 'ff', 'ee']))
// console.log(foo(['hh', 'ff', 'ee']))

// const reverse = arr => arr.reverse()
// const first = arr => arr[0]
// const upperCase = str => str.toUpperCase()

// ES5版本
// function flowRight(...args) {
//   return function (v) {
//     return [...args].reverse().reduce(function (acc, cur) {
//       return cur(acc)
//     }, v)
//   }
// }

// 使用箭头函数简化代码
// const flowRight = (...args) => v => [...args].reverse().reduce((acc, cur) => cur(acc), v)

// const foo = flowRight(upperCase, first, reverse)

// console.log(foo(['hh', 'ff', 'ee']))
// console.log(foo(['hh', 'ff', 'ee']))
// console.log(foo(['hh', 'ff', 'ee']))

// import _ from 'lodash'

// const split = _.curry((spin, str) => str.split(spin))
// const map = _.curry((fn, arr) => arr.map(v => fn(v)))
// const join = _.curry((spin, arr) => arr.join(spin))

// const cat = _.flowRight(join('-'), map(_.toUpper), split('-'))

// console.log(cat('asd-fgh-jkl'))

// import fp from 'lodash/fp'

// const foo = fp.flowRight(fp.join('-'), fp.map(fp.upperCase), fp.split('-'))

// console.log(foo('aad-dsada-sdada-sdad'))

// const format = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toUpper)

// console.log(format('ss dd dsaa    sds'))

// function cc(str, spin, flag) {
//   return str.split()
// }

// class kill extends React.Component {
//   render() {
//     return null
//   }
// }


// class Hello extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'ddd'
//     }
//   }
//   render() {
//     return <div>{this.state.name}</div>
//   }
// }

class Foo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      msg: 'first value'
    }
  }
  render(){
    return (
      <div>
        <Bar msg={this.state.msg} onClick={() => this.onClick()}></Bar>
      </div>
    )
  }
  componentWillMount
  onClick() {
    this.setState({
      msg: 'last value'
    })
  }
}

class Bar extends React.Component{
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.msg}
      </div>
    )
  }
  // componentWillReceiveProps 生命周期函数将会在调用该组件的父组件传递过来的props属性发生变化时执行
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
}


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" style={{borderColor: 'red',boxShadow: '0 0 10px #ccc'}} onClick={() => this.props.onClick()}>{this.props.value}</button>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      xIsNext: true,
      stepNumber: 0,
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(
  <Foo />,
  document.getElementById('root')
);