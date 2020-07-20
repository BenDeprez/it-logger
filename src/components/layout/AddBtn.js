import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large teal modal-trigger tooltipped'
        data-position='left'
        data-tooltip='Add Log'>
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating light-green lighten modal-trigger tooltipped'
            data-position='left'
            data-tooltip='List Techs'>
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a
            href='#tech-modal'
            className='btn-floating deep-orange accent-2 modal-trigger tooltipped'
            data-position='left'
            data-tooltip='Add Tech'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
