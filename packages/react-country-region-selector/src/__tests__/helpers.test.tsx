import { filterRegions } from '../helpers';
import { CountryRegionDataMinified } from '../types';

describe('filterRegions', () => {
  const minifiedData: CountryRegionDataMinified = [
    'CA',
    'Canada',
    'AB~Alberta|BC~British Columbia|Saskatchewan~SK',
  ];

  test('', () => {
    const data = filterRegions(minifiedData, {}, {});

    console.log(data);
  });
});
