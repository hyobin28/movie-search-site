import { Component } from "../core/Component";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    //해시라우팅: 페이지가 새로고침되지 않고 URL만 변경(SPA)
    this.el.innerHTML = /* html */ `
    <a href = "#/">Main!</a>    
    <a href = "#/about">About!</a>
    `
  }
}