import { Lightning, Utils } from '@lightningjs/sdk'

type MovieData = {
  label: string
  src: string
}

type ItemData = {
  label: string
  movies: MovieData[]
}

export default class Category extends Lightning.Component {
  _item!: ItemData

  static override _template() {
    return {
      Label: {
        text: { text: '', fontFace: Utils.asset('fonts/Roboto-Regular.ttf') as string },
      },
      Movies: {
        y: 50,
        type: Lightning.components.ListComponent,
        itemSize: 200,
        horizontal: true,
        roll: true,
        signals: { select: true },
        items: [],
      },
    }
  }

  override _setup() {
    const { label, movies } = this._item
    this.tag('Label').text = label
    this.tag('Movies').update({ items: movies })
  }
}
