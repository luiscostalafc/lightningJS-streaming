import { Lightning, Utils } from '@lightningjs/sdk'
import Home from './Home'

export default class App extends Lightning.Component {
  static override _template() {
    return {
      Home: {
        type: Home,
      },
    }
  }

  static getFonts() {
    return [
      {
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf') as string,
      },
    ]
  }

  override _init() {
    this.tag('Home').start()
  }
}
