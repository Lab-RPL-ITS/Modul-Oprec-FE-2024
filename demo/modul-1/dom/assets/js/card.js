class Card {
  text;
  _height = 100;
  _width = 100;
  _is_hidden = false;

  constructor(text) {
    this.text = text;
  }

  set_height(height) {
    this._height = height;
  }

  set_is_hidden(is_hidden) {
    this._is_hidden = is_hidden;
  }

  render() {
    return `
            <div class="card" style="height: ${this._height}px; width: ${
      this._width
    }px; display: ${this._is_hidden ? "none" : "block"}">
                <p class="card__content">${this.text}</p>
                <div class="card__footer">
                    <button class="delete">Delete</button>
                </div>
            </div>
        `;
  }
}

export default Card;
