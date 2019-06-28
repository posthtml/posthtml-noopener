import { sameHost } from './sameHost';

function posthtmlNoopener() {
  return function plugin(tree: ITree) {
    tree.match(
      {
        tag: 'a',
        attrs: {
          href: new RegExp(/\S+/),
          target: '_blank'
        }
      },
      node => {
        const { rel, href } = (node as INodeTargetBlank).attrs;

        const invalidRel = rel === undefined || !rel.trim();
        const notSameHost = !sameHost(href.trim());

        if (invalidRel && notSameHost) {
          (node as INodeTargetBlank).attrs.rel = 'noopener noreferrer';
        }

        return node;
      }
    );
  };
}

export { posthtmlNoopener };

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

interface INodeTargetBlank extends INode {
  attrs: {
    target: '_blank';
    href: string;
    rel?: string;
  };
}

type Match = string | RegExp;

interface IMatcher {
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

interface ITree {
  match: (matcher: IMatcher | IMatcher[], node: (node: INode) => INode) => void;
}
