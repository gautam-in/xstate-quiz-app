import React from 'react';
import { StyledForm, FieldGroup, Label, Input } from '../../atoms/Form';
import Button from '../../atoms/Button';
import Alert from '../../atoms/Alert';
import { companyProps, emailProps, nameProps } from './RegistrationForm.config';
import { QuizMachineService } from '../../../machines/QuizMachine';
import { useService } from '@xstate/react';

import {
  ErrorMessage,
  RegistrationHeading,
  RegistrationDescription,
} from './RegistrationForm.style';

const RegistrationForm = () => {
  const [state, send] = useService(QuizMachineService);
  return (
    <StyledForm
      onSubmit={(e) => {
        //🔥 Send form data from here
        e.preventDefault();
        send('SUBMIT');
      }}
    >
      {state.matches('error') ? (
        <Alert>
          {/*🔥 Show form submit error here */}
          An error occurred while submitting the form. Try again.
        </Alert>
      ) : null}
      <RegistrationHeading>Game on?</RegistrationHeading>
      <RegistrationDescription>
        Answer these questions on Front-end / React and win cool prizes.
      </RegistrationDescription>
      <FieldGroup>
        <Label htmlFor={nameProps.id}>{nameProps.label}</Label>
        <Input
          {...nameProps}
          aria-describedby="fullname-error"
          onChange={(e) => {
            //🔥 Store something in state on change
            send({ type: 'NAME_CHANGED', value: e.target.value });
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
          onChange={(e) => {
            //🔥 Store something in state on change
            send({ type: 'EMAIL_CHANGED', value: e.target.value });
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
          onChange={(e) => {
            //🔥 Store something in state on change
            send({ type: 'ORG_CHANGED', value: e.target.value });
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
