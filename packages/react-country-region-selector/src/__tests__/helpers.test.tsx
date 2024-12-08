import { filterRegions } from '../helpers';
import { CountryRegionDataMinified } from '../types';

describe('filterRegions', () => {
  const minifiedData: CountryRegionDataMinified = [
    'CA',
    'Canada',
    'AB~Alberta|BC~British Columbia|Saskatchewan~SK',
  ];

  it('returns full region list when no whitelist or blacklist defined', () => {
    const data = filterRegions(minifiedData, {}, {});

    expect(data).toEqual(minifiedData);
  });
});
