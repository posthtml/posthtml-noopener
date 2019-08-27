import { PostHTMLTree } from 'posthtml';
import { sameHost } from './sameHost';

function noopener() {
  return function plugin(tree: PostHTMLTree) {
    tree.match(
      {
        tag: 'a',
        attrs: { target: '_blank', href: new RegExp(/\S+/) }
      },
      node => {
        const { rel, href } = node.attrs!;
        const invalidRel = rel === undefined || !rel.trim();
        const notSameHost = !sameHost(href.trim());

        if (invalidRel && notSameHost) {
          node.attrs!.rel = 'noopener noreferrer';
        }

        return node;
      }
    );
  };
}

export { noopener };
