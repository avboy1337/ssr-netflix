import React, { PureComponent } from "react";
import Loader from "../../components/Loader";
import styles from "./User.css";

class UserPage extends PureComponent {
  static defaultProps = {
    user: null
  };

  /**
   * componentWillMount was not useful for one-pass server rendering anyway
   * because it is synchronous so you can’t wait for the data.
   *
   * @link https://github.com/reactjs/reactjs.org/issues/727
   */
  componentWillMount() {
    this.props.fetchUserById(this.props.userId);
  }

  // componentDidMount() {
  //   this.props.fetchUserById(this.props.userId);
  // }

  render() {
    const { loading, user } = this.props;
    return (
      <div>
        <h2 className={styles.title}>User Page</h2>
        <Loader loading={loading} />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }
}

export default UserPage;
