//실제 UI 요소와 동작을 구체화한 컴포넌트
import { Component } from './core/Component'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view')
    this.el.append(
      new TheHeader().el, 
      routerView
    )
  }
}
