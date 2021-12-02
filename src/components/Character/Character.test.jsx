import { screen, render } from '@testing-library/react';
import Character from './Character';

it('should render Character element on page', async () => {
  const { container } = render(<Character head="beth" middle="cowboy" bottom="gummybear" />);
  const element = await screen.findAllByRole('article');

  expect(element[0]).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
