import { ApplicationElement } from 'interfaces/component';
import Instance from '../Instance/Instance';
import DomInstance from '../Instance/DomInstance';
import types from '../Instance/types';
import elementTypeChecker from 'util/elementTypeChecker';
import PlusnewAbstractElement from 'PlusnewAbstractElement';

class Reconciler {
  /**
   * Checks if something changed
   * evaluates if its the same instance, and if it needs an update
   * or if it should be removed and replaced
   */
  public update(newAbstractElement: ApplicationElement, instance: Instance) {
    if (this.isSameAbstractElement(newAbstractElement, instance.abstractElement)) {
      if (instance.type === types.Dom) {
        const domInstance = instance as DomInstance;
        const domElement = newAbstractElement as PlusnewAbstractElement;
        for (const prop in domElement.props) {
          if (prop !== 'children') { // @TODO add special-values to a specific place
            domInstance.setProp(prop, domElement.props[prop]);
          }
        }

        instance.abstractElement = newAbstractElement; // updating the shadowdom
      }
    } else {
      console.log('unequal');
    }
  }

  /**
   * checks if the abstractElements are the same
   */
  private isSameAbstractElement(newAbstractElement: ApplicationElement, oldAbstractElement: ApplicationElement) {
    return this.isSameAbstractElementType(newAbstractElement, oldAbstractElement);
    // The following code does the key-property check, not yet stable
    // if (this.isSameAbstractElementType(newAbstractElement, oldAbstractElement) === true) {
    //   if (elementTypeChecker.isComponentElement(newAbstractElement) === true || elementTypeChecker.isDomElement(newAbstractElement)) {
    //     if ((newAbstractElement as PlusnewAbstractElement).props.hasOwnProperty('key')) {
    //       if ((oldAbstractElement as PlusnewAbstractElement).props.hasOwnProperty('key')) {
    //         // newAbstractElement and oldAbstractElement, have a key - is it the same?
    //         return (newAbstractElement as PlusnewAbstractElement).props.key === (oldAbstractElement as PlusnewAbstractElement).props.key 
    //       } else {
    //         // newAbstractElement has key, but oldAbstractElement has not
    //         return false;
    //       }
    //     } else if ((oldAbstractElement as PlusnewAbstractElement).props.hasOwnProperty('key')) {
    //       // newAbstractElement has no key, but oldAbstractElement has
    //       return false;
    //     } else {
    //       // newAbstractElement and oldAbstractElement dont have a key, because of that its assumed they are the same
    //       return true;
    //     }
    //   } else {
    //     // newAbstractElement and oldAbstractElement, are either text or array. these are handled the same
    //     return true;
    //   }
    // } else {
    //   // it's not the same type, therefore it can't be the same element
    //   return false;
    // }
  }

  /**
   * checks if the abstractElements are the same type
   */
  private isSameAbstractElementType(newAbstractElement: ApplicationElement, oldAbtractElement: ApplicationElement) {
    if (elementTypeChecker.isTextElement(newAbstractElement)) {
      return elementTypeChecker.isTextElement(oldAbtractElement);
    } else if (elementTypeChecker.isArrayElement(newAbstractElement)) {
      return elementTypeChecker.isArrayElement(oldAbtractElement);
    } else if (elementTypeChecker.isDomElement(newAbstractElement)) {
      if (elementTypeChecker.isDomElement(oldAbtractElement)) {
        // newAbstractElement and oldAbtractElement are dom elements, but is elementNode the same
        return (newAbstractElement as PlusnewAbstractElement).type === (oldAbtractElement as PlusnewAbstractElement).type;
      } else {
        // newAbstractElement is a domElement, but oldAbtractElement isn't
        return false;
      }
    } else if (elementTypeChecker.isComponentElement(newAbstractElement)) {
      if (elementTypeChecker.isComponentElement(oldAbtractElement)) {
        // newAbstractElement and oldAbtractElement are components, but are they the same function
        return (newAbstractElement as PlusnewAbstractElement).type === (oldAbtractElement as PlusnewAbstractElement).type;
      } else {
        // newAbstractElement is a component, but oldAbtractElement isn't
        return false;
      }
    } 
    throw new Error('Unknown abstractElement detected');
  }
}

export default new Reconciler();