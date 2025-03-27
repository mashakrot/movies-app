/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';


test('renders Home link', () => {
    render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
});

test('renders Favorites link', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const favoriteLink = screen.getByText('favorites/i');
    sxpect(favoriteLink).toBeInTheDocument();
});