import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getReleasingMovies();

    //HomeActions.getMoviesThisYear();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(movie) {
    var winner = character.characterId;
    var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
    HomeActions.vote(winner, loser);
  }

  render() {
   

    var movieNodes = this.state.movies.map((movie,index) => {
      return (
        <div key={movie.Id} className={index%4 === 0 ? 'col-xs-3 col-sm-3 col-md-3' : 'col-xs-3 col-sm-3 col-md-3'}>
          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, movie)} src={movie.PosterPath}/>
            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong>Rating:</strong> {movie.Rating}</li>
                <li><strong>Genre:</strong> {movie.Genre}</li>
              </ul>
              <h4>
                <Link to={'/movie/' + movie.Id}><strong>{movie.Title}</strong></Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>Click on a movie. Select your favorite.</h3>
        <div className='row'>
          {movieNodes}
        </div>
      </div>
    );
  }
}

export default Home;