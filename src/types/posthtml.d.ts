declare module 'posthtml' {
  export interface INode {
    tag?: string;
    attrs?: {
      id?: string;
      class?: string;
      target?: string;
      href?: string;
      rel?: string;
    };
    content?: INode[];
  }

  export interface INodeTargetBlank extends INode {
    attrs: {
      target: '_blank';
      href: string;
      rel?: string;
    };
  }

  export type Match = string | RegExp;

  export interface IMatcher {
    tag?: string;
    attrs?: {
      id?: Match;
      class?: Match;
      target?: Match;
      href?: Match;
      rel?: Match;
    };
    content?: IMatcher[];
  }

  export interface ITree {
    match: (
      matcher: IMatcher | IMatcher[],
      node: (node: INode) => INode
    ) => void;
  }

  export default function(): any;
}
