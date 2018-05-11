import React, { Component } from 'react';

class MovieRow extends Component {
  render(){
    const { movie } = this.props
    return(
      <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={movie.poster_src} alt="poster"/>
            </td>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MovieRow; 