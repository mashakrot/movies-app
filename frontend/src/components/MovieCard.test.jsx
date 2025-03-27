/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';



test('renders movie title', () => {
    const movie = { title: 'Inception', year: '2010' };

    render(<MovieCard movie={movie} />)
    const titleElement = screen.getByText(/inception/i);
    expect(titleElement).toBeInTheDocument();
})


test('renders movie year', () => {
    const movie = { title: 'Inception', year: '2010' };
    render(<MovieCard movie={movie} />);
    const yearElement = screen.getByText(/2010/i);
    expect(yearElement).toBeInTheDocument();
});

test('toggles favorite button on click', () => {
    renderWithContext(<MovieCard movie={movie} />);
  
    const favoriteButton = screen.getByRole('button'); 
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveClass('active');

  
    fireEvent.click(favoriteButton);
    expect(favoriteButton).not.toHaveClass('active');  
    
  });