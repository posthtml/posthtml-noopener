import type { Node } from "posthtml";
import { sameHost } from "./sameHost";

export const noopener = () => {
  return (tree: Node) => {
    tree.match(
      {
        tag: "a",
        attrs: { target: "_blank", href: new RegExp(/\S+/) },
      },
      (node) => {
        const { rel, href } = node.attrs!;
        const invalidRel = rel === undefined || !rel.trim();
        const notSameHost = !sameHost(href.trim());

        if (invalidRel && notSameHost) {
          node.attrs!.rel = "noopener noreferrer";
        }

        return node;
      }
    );
  };
};
