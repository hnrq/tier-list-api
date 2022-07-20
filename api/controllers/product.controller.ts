import { getDomain, getProductId, isDomainSupported } from '../utils/url';
import * as aliexpressService from '../services/aliexpress.service';

export const getProduct = async (url: URL) => {
  try {
    if (!isDomainSupported(url)) throw 'Domain not supported';

    const productId = getProductId(url);
    switch (getDomain(url)) {
      case 'aliexpress.com':
        return aliexpressService.getProduct(productId);
    }
  } catch (error) {
    throw error;
  }
};
