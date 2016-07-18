import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getReleasingMoviesSuccess',
      'getReleasingMoviesFail',
      'getMoviesThisYearSuccess',
      'getMoviesThisYearFail'
    );
  }


  getReleasingMovies() {
    $.ajax({ url: '/api/getReleasingMovies'})
      .done(data => {
        this.actions.getReleasingMoviesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getReleasingMoviesFail(jqXhr.responseJSON.message);
      })
  }

  getMoviesThisYear() {
     $.ajax({ url: '/api/getMoviesThisYear'})
      .done(data => {
        this.actions.getMoviesThisYearSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getMoviesThisYearFail(jqXhr.responseJSON.message);
      })
  }
}

export default alt.createActions(HomeActions);