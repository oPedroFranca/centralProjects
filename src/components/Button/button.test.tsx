import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button } from '../index';

describe("Button Component?", () => {

  it("You should render the button with primary variant by default, also check that the button and text is on screen", () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const button = getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it("should render the button with secondary variant", () => {
    const { getByRole } = render(<Button variant="secondary">Click Me</Button>);

    const button = getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });
});