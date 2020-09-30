export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this.renderer = renderer;
    this.containerSelector = containerSelector; 
  }

  renderInitialCards() {
    this._items.forEach((cardItem) => {
      this.addItem(this.renderer(cardItem));
    });
  }

  addItem(cardElement) {

    const cardList = document.querySelector(this.containerSelector);
    cardList.prepend(cardElement);
  }
}



  