// LOGS COMPONENT
/////////////////

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

// in order to call an action from a component it needs to be imported

// bring in the 'log state' from mapStateToProps
// then destructure from 'log state': logs and loading
const Logs = ({ log: { logs, loading }, getLogs }) => {
  // get logs when component loads
  useEffect(() => {
    getLogs();

    // eslint-disable-next-line
  }, []);

  // getLogs is now being called from the action

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

// if you want to get anything from app level state into a component, you bring it in as a prop
const mapStateToProps = (state) => ({
  // here we describe what we want to get from the state
  // 'log:' is the name of the prop
  // '.log' in state.log refers to 'log:' logReducer in index.js
  log: state.log,
});

// connect 'mapStateToProps' with the action 'getLogs' and the component 'Logs'
// note: when you bring in an action in this way, it becomes a prop
export default connect(mapStateToProps, { getLogs })(Logs);
