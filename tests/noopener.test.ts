import posthtml from "posthtml";
import { describe, test, expect } from "vitest";
import { noopener } from "../src";

interface ITestCase {
  name: string;
  input: string;
}

const testCases: ITestCase[] = [
  {
    name: "Link without `rel` attribute",
    input: `<a href="http://" target="_blank"></a>`,
  },
  {
    name: "Link with empty `href` attribute is ignored",
    input: `<a href="" target="_blank"></a>`,
  },
  {
    name: "Link with empty `rel` attribute",
    input: `<a href="http://" target="_blank" rel=""></a>`,
  },
  {
    name: "Link to same host is ignored",
    input: `<a href="/" target="_blank"></a>`,
  },
];

describe("posthtmlNoopener", () => {
  testCases.forEach((testCase) => {
    test(`'${testCase.name}' matches the snapshot`, () => {
      posthtml()
        .use(noopener())
        .process(testCase.input)
        .then(({ html }) => {
          expect(html).toMatchSnapshot();
        });
    });
  });
});
