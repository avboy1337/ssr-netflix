import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserById, onFetchMovies } from "../../modules/users";
import UserPage from "./User";

const mapStateToProps = (state, props) => ({
  user: state.users.current,
  loading: state.users.loading,
  userId: props.match.params.userId,
  movies: state.users.movies
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUserById,
      onFetchMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
