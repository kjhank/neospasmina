import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Content, Cover, PortraitCover, Title,
} from '@components/GenericPage/GenericPage.styled';

import {
  ContactData, Container, FormWrapper, Header, Legal,
} from '@components/ContactPage/ContactPage.styled';

import { Main } from '@components/styled';
import { ContactForm } from '@components/ContactPage/ContactForm';

import ENDPOINTS from '@utils/static/endpoints';

const ContactPage = ({
  pageContext: {
    contact, cover, coverPortrait, hasPortraitCover,
  },
}) => {
  const [
    formData,
    setFormData,
  ] = useState(contact.form.reduce((acc, field) => {
    const { field: { name } } = field;

    return {
      ...acc,
      [name]: '',
      pot: '',
    };
  }, {}));

  const [
    formMessage,
    setFormMessage,
  ] = useState('');

  const [
    isFormDisabled,
    setFormDisabled,
  ] = useState(false);

  const formRef = createRef();

  const FORM_URL = `${process.env.REST_URL}/${ENDPOINTS.CONTACT}/${contact.submit.form_id.ID}/feedback`;

  const handleForm = event => {
    event.preventDefault();
    const { current: formElement } = formRef;
    const isValid = formElement.checkValidity();

    if (isValid) {
      if (formData.pot) {
        setFormMessage('naughty, naughty bot');
      } else {
        fetch(FORM_URL, {
          body: new FormData(formElement),
          method: 'post',
        })
          .then(response => response.json())
          .then(({
            status, message,
          }) => setFormMessage(status === 'mail_sent' ? message : 'Nastąpił błąd, spróbuj ponownie później'))
          .catch(error => {
            console.log(error);
          });
      }
    } else {
      formElement.reportValidity();
    }
  };

  useEffect(() => {
    setFormDisabled(formMessage);
  }, [formMessage]);

  return (
    <Main>
      <Header>
        <Cover
          $hideOnPortrait={hasPortraitCover}
          image={cover}
        />
        {hasPortraitCover && <PortraitCover image={coverPortrait} />}
        <Container>
          <Title
            dangerouslySetInnerHTML={{
              __html: sanitize(contact.header.title),
            }}
          />
          <ContactData
            dangerouslySetInnerHTML={{
              __html: sanitize(contact.header.data),
            }}
          />
          <Legal
            dangerouslySetInnerHTML={{
              __html: sanitize(contact.header.legal),
            }}
          />
        </Container>
      </Header>
      <Content>
        <Container>
          <FormWrapper>
            <ContactForm
              data={formData}
              fields={contact.form}
              formRef={formRef}
              isDisabled={isFormDisabled}
              message={formMessage}
              onSubmit={handleForm}
              setData={setFormData}
              submit={contact.submit}
            />
          </FormWrapper>
        </Container>
      </Content>
    </Main>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    contact: PropTypes.shape({
      form: PropTypes.arrayOf(PropTypes.shape({})),
      header: PropTypes.shape({
        data: PropTypes.string,
        legal: PropTypes.string,
        title: PropTypes.string,
      }),
      submit: PropTypes.shape({
        form_id: PropTypes.shape({
          ID: PropTypes.number,
        }),
      }),
    }),
    cover: PropTypes.shape({}).isRequired,
    coverPortrait: PropTypes.shape({}),
    featuredProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    hasPortraitCover: PropTypes.bool,
    heading: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
  }).isRequired,
};
