// @FIXME this is needed to trick typescript into generating .d.ts file
// if a file doesn't export anything other than types, it won't generate the .d.ts file
const nothing = null;
export { nothing };

interface PlusnewKeyboardEvent<currentTarget extends Element, target extends Element = Element> extends KeyboardEvent {
  target: target;
  currentTarget: currentTarget;
}

interface PlusnewMouseEvent<currentTarget extends Element, target extends Element = Element> extends KeyboardEvent {
  target: target;
  currentTarget: currentTarget;
}

interface PlusnewTouchEvent<currentTarget extends Element, target extends Element = Element> extends TouchEvent {
  target: target;
  currentTarget: currentTarget;
}

export {
  PlusnewKeyboardEvent as KeyboardEvent,
  PlusnewMouseEvent as MouseEvent,
  PlusnewTouchEvent as TouchEvent,
};

