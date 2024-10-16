import { Component } from "../core/Component"

export default class FruitItem extends Component {
  constructor(payload) {
    super({
      tagname: 'li', 
      props: payload.props
    })
  }
  render() {  //this.el은 <li>
    this.el.innerHTML = /* html */ `    
    <span>${this.props.name}</span>
    <span>${this.props.price}</span>
    `

    this.el.addEventListener('click', () => {
      console.log(this.props.name, this.props.price)
    })
  }
}