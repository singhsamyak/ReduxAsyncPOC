import { SUBMIT_SEARCH, UPDATE_SEARCH } from '../actions/types';
import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    loading: state.home.loading,
    oops: state.feed.oops,
    posts: state.feed.posts,
    postsDisplayed: state.home.postsDisplayed,
    subRedditTitle: state.feed.subRedditTitle
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (event) => {
      event.preventDefault();
      dispatch({
        type: SUBMIT_SEARCH,
        query: event.target[0].value
      });
    },
    onSearchUpdate: (event) => {
      dispatch({
        type: UPDATE_SEARCH,
        searchValue: event.target.value
      });
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
