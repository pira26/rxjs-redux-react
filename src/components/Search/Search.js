import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks';

export const Search = props => {
  const [genreSelected, setGenreSelected] = useState();
  const [filter, setFilter] = useState('');
  const {fetchGenreAction, fetchBookAction} = useActions();
  const {genres, loading, fetched, error} = useSelector(state => state.genre);
  
  useEffect(() => {
    if (!genres || genres.length === 0) {
      fetchGenreAction();
    }
  }, []);
  
  const searchBooks = () => {
    const body = {
      genre: genreSelected,
      filter: filter
    };
    fetchBookAction(body)
  };
  
  const selectGenre = event => {
    if (event.target.value) {
      const genre = parseInt(event.target.value);
      setGenreSelected(genre);
      const body = {
        genre: genre,
        filter: filter
      };
      fetchBookAction(body);
    }
  };
  
  return (
      <div className="search">
        {
          error
              ? error
              : loading || !fetched
              ? 'Loading..'
              : (
                  <select id="genre" className="genre-select"
                          onChange={selectGenre}>
                    <option value={0}>All genres</option>
                    {
                      genres &&
                      genres.map(g => {
                        return (<option key={g.code} value={g.code}>{g.genre}</option>)
                      })
                    }
                  </select>
              )
        }
        <input id="books" size="20" onChange={e => setFilter(e.target.value)}
               className="search-input"
               placeholder="Books, Author, Title."/>
        <button className="search-button" onClick={() => searchBooks()}>
          <i className="fas fa-book"/>
          Search
        </button>
      </div>
  );
};