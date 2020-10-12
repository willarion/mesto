export class Section {
  constructor({renderer}, containerSelector) {
    this.renderer = renderer;
    this._cardList = document.querySelector(containerSelector);
  }

  renderInitialCards(items, isCardCreatedByUserCheck) {
    items.forEach((cardItem) => {
      if (isCardCreatedByUserCheck(cardItem))
      {this.addItem(this.renderer(cardItem, true), items)}
      else {this.addItem(this.renderer(cardItem), items)}
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



  