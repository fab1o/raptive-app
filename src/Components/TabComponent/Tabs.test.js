import { render, screen } from '@testing-library/react';

import Tabs from './Tabs';

test('Renders tabs', () => {
  render(<Tabs />);
  
  const tab1 = screen.queryByText(/Top Posts/i);
  const tab2 = screen.queryByText(/Lowest Views/i);
  const tab3 = screen.queryByText(/Highest Scoring/i);

  expect(tab1).toBeInTheDocument();
  expect(tab2).toBeInTheDocument();
  expect(tab3).toBeInTheDocument();
});
