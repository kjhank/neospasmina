import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';
import {
  Form, Input, Label, Legend, Required,
} from './ContactPage.styled';

export const ContactForm = ({
  data,
  fields,
  formRef,
  isDisabled,
  message,
  onSubmit,
  setData,
  submit,
}) => (
  <Form ref={formRef}>
    {fields.map(({ field }) => (
      <Label
        htmlFor={field.name}
        key={field.name}
        variant={field.variant}
      >
        {field.label}
        {field.required && <Required>*</Required>}
        :
        <Input
          as={field.variant === 'textarea' ? 'textarea' : 'input'}
          id={field.name}
          name={field.name}
          onChange={event => setData(previous => ({
            ...previous,
            [event.target.id]: event.target.value,
          }))}
          required={field.required}
          type={field.type}
          value={data[field.name]}
          variant={field.variant}
        />
      </Label>
    ))}
    <Legend>
      * pole obowiązkowe
    </Legend>
    <ButtonLink
      customAs="button"
      disabled={isDisabled}
      hasArrow={!message}
      onClick={onSubmit}
      type="submit"
    >
      {message || submit.text}
    </ButtonLink>
  </Form>
);

ContactForm.propTypes = {
  data: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  formRef: PropTypes.shape({}).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  submit: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

ContactForm.defaultProps = {
  message: null,
};
