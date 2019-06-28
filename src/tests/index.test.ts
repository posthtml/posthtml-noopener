import posthtml from 'posthtml';
import { noopener } from '../';
import { testCases } from './__fixtures__/testCases';

describe('posthtmlNoopener', () => {
  testCases.forEach(testCase => {
    test(`'${testCase.name}' matches the snapshot`, () => {
      posthtml()
        .use(noopener())
        .process(testCase.input)
        .then((result: { html: string }) => {
          expect(result.html).toMatchSnapshot();
        });
    });
  });
});
