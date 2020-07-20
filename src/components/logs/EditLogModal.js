import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({
        html: 'Enter a message and tech',
        classes: 'red',
      });
    } else {
      console.log(message, tech, attention);
      //clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        {' '}
        <h4>Edit System Log</h4>
        {/* add log message */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        {/* set tech */}
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sara Wilson'>Sara Wilson</option>
              <option value='Sam Smith'>Sam Smith</option>
            </select>
          </div>
        </div>
        {/* set attention */}
        <div className='row'>
          <div className='input-field'>
            <div className='p'>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='!#'
            onClick={onSubmit}
            className='modal-close waves-effect waves-teal btn'>
            Edit Log
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default EditLogModal;
