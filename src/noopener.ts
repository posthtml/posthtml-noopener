import { INodeTargetBlank, ITree } from 'posthtml';
import { sameHost } from './sameHost';

function noopener() {
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

export { noopener };
