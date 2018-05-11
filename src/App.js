import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  //   const movies = [
  //     {
  //       id: 0,
  //       title: 'Avengers',
  //       poster_src: 'https://ia.media-imdb.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
  //       overview : 'As thie fdjsaiofjeiowajfioaejwiojfiodjsjcioas'
  //     },
  //     {
  //       id: 1,
  //       title: 'Avengers2',
  //       poster_src:'https://i.annihil.us/u/prod/marvel/i/mg/9/b0/55e0964dd4e2e/portrait_incredible.jpg',
  //       overview : 'As thie fdjsaiofjeiowajfioaejwiojfiodjsjcioas'
  //     },
  // ]

  //   this.state ={ 
  //     rows: [
  //       <p key='1'>this is my rows0</p>,
  //       <p key='2'>this is my rows1</p>,
  //       <p key='3'>this is my rows2</p>,
  //       ]}
  //   let movieRows = []
  //   movies.forEach((movie) => {
  //     console.log(movie.title)
  //     const movieRow = <MovieRow movie={movie}/>
  //     movieRows.push(movieRow)
  //   })

  //   this.state = {rows: movieRows }

    this.performSearch("black")
  }
  performSearch(searchTerm){
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=b6cf942411531af0d1635061b75f82a6&language=en-US&page=1&include_adult=true&query='+searchTerm;
    $.ajax({
      url: urlString,
      success : (searchResults) => {
        console.log(searchResults);
        const results = searchResults.results;
        let movieRows =[]
        results.forEach((movie) => {
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({
          rows: movieRows
        })
      },
      error:(xhr, status, err) => {
        console.error('error')
      }
    })
  }
  searchChangeHandle(event){
    let searchTerm = event.target.value
    const boundObject = this
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div className="App">
        <h1 className='header'>Movie DB by Kyun</h1>
        <input className='searchbar' placeholder='Enter search term' onChange={this.searchChangeHandle.bind(this)}/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
