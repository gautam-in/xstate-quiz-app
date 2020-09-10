import React from 'react';
import { StyledForm, FieldGroup, Label, Input } from '../../atoms/Form';
import Button from '../../atoms/Button';
import Alert from '../../atoms/Alert';
import { companyProps, emailProps, nameProps } from './RegistrationForm.config';

import {
  ErrorMessage,
  RegistrationHeading,
  RegistrationDescription,
} from './RegistrationForm.style';

const RegistrationForm = () => {
  return (
    <StyledForm
      onSubmit={() => {
        //🔥 Send form data from here
      }}
    >
      <Alert>{/*🔥 Show form submit error here */}</Alert>
      <RegistrationHeading>Game on?</RegistrationHeading>
      <RegistrationDescription>
        Answer these questions on Front-end / React and win cool prizes.
      </RegistrationDescription>
      <FieldGroup>
        <Label htmlFor={nameProps.id}>{nameProps.label}</Label>
        <Input
          {...nameProps}
          aria-describedby="fullname-error"
          onChange={() => {
            //🔥 Store something in state on change
          }}
        />
      </FieldGroup>
      <ErrorMessage id="fullname-error" aria-live="assertive">
        {/*🔥 Error message for name validation */}
      </ErrorMessage>

      <FieldGroup>
        <Label htmlFor={emailProps.id}>{emailProps.label}</Label>
        <Input
          {...emailProps}
          aria-describedby="email-error"
          onChange={() => {
            //🔥 Store something in state on change
          }}
        />
      </FieldGroup>
      <ErrorMessage id="email-error" aria-live="assertive">
        {/*🔥 Error message for email validation */}
      </ErrorMessage>

      <FieldGroup>
        <Label htmlFor={companyProps.id}>{companyProps.label}</Label>
        <Input
          aria-describedby="company-error"
          {...companyProps}
          onChange={() => {
            //🔥 Store something in state on change
          }}
        />
      </FieldGroup>
      <ErrorMessage id="company-error" aria-live="assertive">
        {/*🔥 Error message for company validation */}
      </ErrorMessage>
      <Button
        type="submit"
        // 🔥 Handle loading state when submitting form
      >
        Register
      </Button>
    </StyledForm>
  );
};

export default RegistrationForm;
