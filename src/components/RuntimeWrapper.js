import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from '../redux/store';

export default function RuntimeWrapper(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

RuntimeWrapper.propTypes = {
  children: PropTypes.node,
};
