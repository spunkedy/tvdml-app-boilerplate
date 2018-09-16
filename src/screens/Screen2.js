import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { showMessageFactory } from '../helpers/show-message';

import withCounter from '../redux/withCounter';

function Screen2(props) {
  const counter = props.counter || 0;
  if (!props.loading && props.data && props.data.allProducts) {
    console.log("this should be:")
    console.log(props.data.allProducts[0]);
    return (
      <document>
        <alertTemplate>
          <title style={{ tvTextStyle: 'title1' }}>💃</title>
          <text>And here is a global counter!</text>
          <text style={{ tvTextStyle: 'title2' }}>
            {props.loading.toString()} and {props.data.allProducts[0].name}
          </text>
          <button onSelect={showMessageFactory('😏')}>
            <text>🚗</text>
          </button>
        </alertTemplate>
      </document>
    );
  }
  return (
    <document>
      <alertTemplate>
        <text>loading...</text>        
      </alertTemplate>
    </document>
  );
  
}

Screen2.propTypes = {
  counter: PropTypes.number.isRequired,
};

Screen2.defaultProps = {
  counter: 0,
};

const WithCounter = withCounter(Screen2);
const WrappedQuery = () => (
  <Query
    pollInterval={4000}
    query={gql`
      query {
        allProducts(count: 25) {
          id
          name
          price
        }
      }
      
      `
    }>
    {(rest) => (
      <Screen2 {...rest} y={console.log(rest.data)} />
    )}
  </Query>
);

export default WrappedQuery;
