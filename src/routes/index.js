//routes = 페이지들
import { createRouter } from '../core/Component'
import Home from './Home'
import About from './About'

export default createRouter([
  { path: '#/', component: Home }, 
  { path: '#/about', component: About } 
]) 