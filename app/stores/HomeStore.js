import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.movies = [];
  }

  onGetMoviesThisYearSuccess(data) {
    this.movies = JSON.parse(data);
  }

  onGetMoviesThisYearSuccess(errorMessage) {
    toastr.error(errorMessage);
  }

  onGetReleasingMoviesSuccess(data){
    this.movies = JSON.parse(data);
  }

  onGetReleasingMoviesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);