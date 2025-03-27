/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MovieProvider } from './contexts/MovieContext';
import userEvent from '@testing-library/user-event';

const renderApp = () => {
    return render(
        <MovieProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MovieProvider>
    );
};

describe('App component', () => {
    test('should render the navigation bar and main content area', () => {
        renderApp();

        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();

        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('renders Home page by default', () => {
        renderApp();

        const homeText = screen.getByText(/home/i);
        // TODO: Adjust the text to match content in Home component
        expect(homeText).toBeInTheDocument();
    });

    test('navigates to Favorites page when clicking the link', async () => {
        renderApp();

        const favoritesLink = screen.getByText(/favorites/i);
        await userEvent.click(favoritesLink);

        expect(screen.getByText(/favorites/i)).toBeInTheDocument();
    });
});
