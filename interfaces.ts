export type Elements = Array<JSX.Element>;

export type RndyDropEvent = (arg0: { from: number; to: number }) => void;

export interface RndyProps {
  elements: Elements;
  onDropEvent: RndyDropEvent;
}

export interface RndyElementProps {
  index: number;
  children: JSX.Element | JSX.Element[];
  onDropEvent: RndyDropEvent;
}
