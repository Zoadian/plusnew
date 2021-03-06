
import { truefalse } from './../types/truefalse';
import { ApplicationElement } from '../../component';

type htmlGlobalAttributesElement<currentElement> = {
  key?: number | string;
  children?: ApplicationElement | ApplicationElement[];
  onabort?: (event: Event & { currentTarget: currentElement }) => void;
  onautocomplete?: (event: Event & { currentTarget: currentElement }) => void;
  onautocompleteerror?: (event: Event & { currentTarget: currentElement }) => void;
  onblur?: (event: FocusEvent & { currentTarget: currentElement }) => void;
  oncancel?: (event: AnimationPlaybackEvent & { currentTarget: currentElement }) => void;
  oncanplay?: (event: Event & { currentTarget: currentElement }) => void;
  oncanplaythrough?: (event: Event & { currentTarget: currentElement }) => void;
  onchange?: (event: Event & { currentTarget: currentElement }) => void;
  onclick?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onclose?: (event: Event & { currentTarget: currentElement }) => void;
  oncontextmenu?: (event: PointerEvent & { currentTarget: currentElement }) => void;
  oncuechange?: (event: Event & { currentTarget: currentElement }) => void;
  ondblclick?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  ondrag?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragend?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragenter?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragexit?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragleave?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragover?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondragstart?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondrop?: (event: DragEvent & { currentTarget: currentElement }) => void;
  ondurationchange?: (event: Event & { currentTarget: currentElement }) => void;
  onemptied?: (event: Event & { currentTarget: currentElement }) => void;
  onended?: (event: Event & { currentTarget: currentElement }) => void;
  onerror?: (event: ErrorEvent & { currentTarget: currentElement }) => void;
  onfocus?: (event: FocusEvent & { currentTarget: currentElement }) => void;
  oninput?: (event: Event & { currentTarget: currentElement }) => void;
  oninvalid?: (event: Event & { currentTarget: currentElement }) => void;
  onkeydown?: (event: KeyboardEvent & { currentTarget: currentElement }) => void;
  onkeypress?: (event: KeyboardEvent & { currentTarget: currentElement }) => void;
  onkeyup?: (event: KeyboardEvent & { currentTarget: currentElement }) => void;
  onload?: (event: Event & { currentTarget: currentElement }) => void;
  onloadeddata?: (event: Event & { currentTarget: currentElement }) => void;
  onloadedmetadata?: (event: Event & { currentTarget: currentElement }) => void;
  onloadstart?: (event: Event & { currentTarget: currentElement }) => void;
  onmousedown?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmouseenter?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmouseleave?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmousemove?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmouseout?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmouseover?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmouseup?: (event: MouseEvent & { currentTarget: currentElement }) => void;
  onmousewheel?: (event: WheelEvent & { currentTarget: currentElement }) => void;
  onpause?: (event: Event & { currentTarget: currentElement }) => void;
  onplay?: (event: Event & { currentTarget: currentElement }) => void;
  onplaying?: (event: Event & { currentTarget: currentElement }) => void;
  onprogress?: (event: ProgressEvent & { currentTarget: currentElement }) => void;
  onratechange?: (event: Event & { currentTarget: currentElement }) => void;
  onreset?: (event: Event & { currentTarget: currentElement }) => void;
  onresize?: (event: Event & { currentTarget: currentElement }) => void;
  onscroll?: (event: UIEvent & { currentTarget: currentElement }) => void;
  onseeked?: (event: Event & { currentTarget: currentElement }) => void;
  onseeking?: (event: Event & { currentTarget: currentElement }) => void;
  onselect?: (event: UIEvent & { currentTarget: currentElement }) => void;
  onshow?: (event: Event & { currentTarget: currentElement }) => void;
  onsort?: (event: Event & { currentTarget: currentElement }) => void;
  onstalled?: (event: Event & { currentTarget: currentElement }) => void;
  onsubmit?: (event: Event & { currentTarget: currentElement }) => void;
  onsuspend?: (event: Event & { currentTarget: currentElement }) => void;
  ontimeupdate?: (event: Event & { currentTarget: currentElement }) => void;
  ontoggle?: (event: Event & { currentTarget: currentElement }) => void;
  onvolumechange?: (event: Event & { currentTarget: currentElement }) => void;
  onwaiting?: (event: Event & { currentTarget: currentElement }) => void;
  accesskey?: string;
  autocapitalize?: "off" | "none" | "pn" | "sentences" | "words" | "characters";
  className?: string;
  contenteditable?: truefalse;
  dir?: "ltr" | "rtl" | "auto";
  draggable?: truefalse;
  dropzone?: "copy" | "move" | "link";
  hidden?: boolean;
  id?: string;
  is?: string;
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: boolean;
  itemtype?: string;
  lang?: string;
  slot?: string;
  spellcheck?: truefalse;
  style?: Partial<CSSStyleDeclaration>;
  tabindex?: number;
  title?: string;
  translate?: "yes" | "no" | "";
};

export { htmlGlobalAttributesElement };
