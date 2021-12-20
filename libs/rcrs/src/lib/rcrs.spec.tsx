import { render } from '@testing-library/react';

import Rcrs from './rcrs';

describe('Rcrs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rcrs />);
    expect(baseElement).toBeTruthy();
  });
});
