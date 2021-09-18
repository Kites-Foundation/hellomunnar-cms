/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { ALink, Block, Container, P, Wave, Separator } from './components';
import SocialLink from './SocialLink';

const SOCIAL_LINKS = [
  {
    name: 'Discord',
    link: 'https://chat.kitesfoundation.org/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Kites-Foundation/hellomunnar-cms',
  }
];

const HomePage = ({ history: { push } }) => {
  const username = get(auth.getUserInfo(), 'firstname', '');
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />
              <FormattedMessage
                id={"HomePage.greetings"}
                values={{
                  name: upperFirst(username),
                }}
              >
                {msg => <h2 id="mainHeader">{msg}</h2>}
              </FormattedMessage>
              <P>Welcome to Hello Munnar admin panel! Please ask questions on Kites Foundation Discord Server.
                if you have any doubt using this software.</P>
              <p>
                Report bugs via the GitHub issues, if you face any.
              </p>
              <ALink
                rel="noopener noreferrer"
                href={"https://github.com/Kites-Foundation/hellomunnar-cms/issues/new"}
                type={"blog"}
                target="_blank"
                style={{ verticalAlign: ' bottom', marginBottom: 5 }}
              >
                New GitHub Issue
              </ALink>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>Community Links</h2>
              <p>Join our discord server to interact with the people behind Hello Munnar Project. Browse the source code via GitHub.</p>
              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
