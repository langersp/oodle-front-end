import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

const Spinner = ({ backgroundColour, size, text }) => {
  const color = backgroundColour;
  const id = uuidv4();
  return (
    <>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `.${id} .spinner-chase-dot:before {
                      background-color: ${color};
                    }`,
        }}
      />
      <div
        className={`spinner-chase ${id}`}
        style={{ height: size, width: size, '--dot-color': color }}
      >
        <div className="spinner-chase-dot" />
        <div className="spinner-chase-dot" />
        <div className="spinner-chase-dot" />
        <div className="spinner-chase-dot" />
        <div className="spinner-chase-dot" />
        <div className="spinner-chase-dot" />
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </>
  );
};

Spinner.propTypes = {
  /** Colour for the spinner */
  backgroundColour: PropTypes.string,
  /** Size of the spinner */
  size: PropTypes.string,
  /** Text for the spinner */
  text: PropTypes.string,
};

Spinner.defaultProps = {
  backgroundColour: '#294767',
  size: '58px',
  text: null,
};

export default Spinner;
