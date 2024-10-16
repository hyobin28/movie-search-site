// Component
// 필요할 때마다 가져옴

import route from "color-convert/route"

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', 
    state = {}, 
    props = {}
  } = payload   //구조분해할당
    this.el = document.createElement(tagName)   //메모리상에서만 저장
    this.state = state
    this.props = props
    this.render()
  }
  render() {    //하위 클래스에서 오버라이드 될 것

  }
}


//Router
export function createRouter(routes) {
  return function() {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}