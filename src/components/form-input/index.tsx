import React from 'react'

import './index.scss'
import { FormInputProps } from '../../types'

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`{otherProps.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
