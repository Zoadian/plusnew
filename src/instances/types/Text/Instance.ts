import types from '../types';
import Instance from '../Instance';

export default class TextInstance extends Instance {
  public type = types.Text;
  public abstractElement: string;  
  public ref: Text;

  constructor(abstractElement: string, parentInstance: Instance, previousAbstractSiblingCount: () => number) {
    super(abstractElement, parentInstance, previousAbstractSiblingCount);

    this.ref = document.createTextNode(abstractElement);
    this.appendToParent(this.ref, previousAbstractSiblingCount());
  }
  /**
   * textnode is always a length of one
   */
  public getLength() {
    return 1;
  }

  public setText(abstractElement: string) {
    this.ref.textContent = abstractElement;
    return this;
  }

  /**
   * removes this textnode from the dom
   */
  public remove() {
    this.ref.remove();

    return this;
  }
}
