export class Section {
  constructor({renderer}, containerSelector) {
    this.renderer = renderer;
    this._cardList = document.querySelector(containerSelector);
  }

  renderInitialCards(items) {
    items.forEach((cardItem) => {
      this.addItem(this.renderer(cardItem), items);
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



  