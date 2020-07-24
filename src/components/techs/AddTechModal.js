import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  // component level state for the form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // validation
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      M.toast({
        html: "Enter the technician's full name",
        classes: 'red',
      });
    } else {
      addTech({ firstName, lastName });
      M.toast({
        html: `${firstName} ${lastName} added as technician`,
        classes: 'green',
      });
      //clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add Technician</h4> {/* add log message */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstname' className='active'>
              Firstname
            </label>
          </div>
        </div>
        {/* add log message */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Lastname
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='!#'
            onClick={onSubmit}
            className='modal-close waves-effect waves-teal btn'>
            Add Tech
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
