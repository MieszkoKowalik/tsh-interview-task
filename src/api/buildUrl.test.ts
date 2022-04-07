import { buildUrl } from './buildUrl';

const baseUrl = 'https://join-tsh.com';

describe('buildUrl function', () => {
  it('Returns baseUrl if no queryParams passed', () => {
    expect(buildUrl(baseUrl)).toBe(baseUrl);
  });

  it('Correctly builds url', () => {
    const queryParams = { limit: 10, page: 2 };
    expect(buildUrl(baseUrl, queryParams)).toBe(
      baseUrl + '?' + 'limit=10&page=2'
    );
  });
});
