export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this.renderer = renderer;
    this._cardList = document.querySelector(containerSelector);
  }

  renderInitialCards() {
    this._items.forEach((cardItem) => {
      this.addItem(this.renderer(cardItem), this._items);
    });
  }

  addItem(cardElement, array) {
    if (array) {
      this._cardList.append(cardElement); 
    } else {
      this._cardList.prepend(cardElement);
    }    
  }
}



  