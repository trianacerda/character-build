import { render } from '@testing-library/react';
import Display from './Display';

it('should render Display element on page', () => {
  const { container } = render(
    <Display phrases={['hey there', 'the yellowstone', 'get to the bunkhouse']} />
  );
  expect(container).toMatchSnapshot();
});
