import { screen, render } from '@testing-library/react';
import Picker from './Picker';

it('should render Picker element on page', () => {
  const { container } = render(<Picker />);
  const element = screen.getByLabelText(/Middle Options/);

  expect(container).toMatchSnapshot();
  expect(element).toBeInTheDocument();
});
