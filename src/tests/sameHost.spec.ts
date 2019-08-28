import { sameHost } from '../sameHost';

describe('sameHost', () => {
  test('""', () => {
    expect(sameHost('')).toEqual(false);
  });

  test('"http://"', () => {
    expect(sameHost('http://')).toEqual(false);
  });

  test('"/"', () => {
    expect(sameHost('/')).toEqual(true);
  });

  test('"."', () => {
    expect(sameHost('.')).toEqual(true);
  });

  test('"./"', () => {
    expect(sameHost('./')).toEqual(true);
  });

  test('"../"', () => {
    expect(sameHost('../')).toEqual(true);
  });
});
