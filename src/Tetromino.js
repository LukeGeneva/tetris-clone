import templates from './tetrominoTemplates';

class Tetromino {
  constructor(template) {
    this.template = template;
  }

  static create(template) {
    return new Tetromino(templates.S);
  }
}

export default Tetromino;
