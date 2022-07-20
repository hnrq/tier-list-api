import { getDomain, isDomainSupported, getProductId } from './url';

describe('utils/uri', () => {
  describe('getDomain(urlString)', () => {
    it('returns the URI domain only', () => {
      expect(getDomain('https://www.google.com/search?q=hello')).toBe(
        'google.com'
      );
      expect(getDomain('https://www.google.com.br/search?q=hello')).toBe(
        'google.com.br'
      );
    });
  });

  describe('isDomainSupported(URL)', () => {
    it('returns true if domain is supported', () => {
      expect(
        isDomainSupported(new URL('https://aliexpress.com/7382612.html'))
      ).toBe(true);
    });

    it('returns false if domain is not supported', () => {
      expect(
        isDomainSupported(new URL('https://ddddddd.com/7382612.html'))
      ).toBe(false);
    });
  });

  describe('getProductId(URL)', () => {
    it('returns the product id for a supported domain', () => {
      expect(
        getProductId(
          new URL(
            'https://pt.aliexpress.com/item/4000169770089.html?gatewayAdapt=glo2bra'
          )
        )
      ).toBe('4000169770089');
    });
  });
});
