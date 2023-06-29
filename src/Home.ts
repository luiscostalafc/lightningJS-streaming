import { Lightning } from '@lightningjs/sdk'
import Category from './Category'
import { categories } from './mocks/categories'

export default class Home extends Lightning.Component {
  static override _template() {
    return {
      Categories: {
        y: 50,
        type: Lightning.components.ListComponent,
        itemSize: 400,
        horizontal: false,
        roll: true,
        signals: { select: true },
        items: [],
        itemType: Category,
      },
    }
  }

  async update() {
    // const response = await fetch('/mock/categories.json')
    // const data = await response.json()
    this.tag('Categories').update({ items: categories })
  }
}
