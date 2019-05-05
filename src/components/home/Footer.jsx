import React from 'react'
import { Segment, Grid, List, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CenteredBlock } from '../../lib/ui/IClean'
import SocialMedia from './SocialMedia'
import TermsOfService from './TermsOfService'

// CSS
import '../../styles/home/Footer.sass'

const Footer = () => (
  <CenteredBlock>
    <Grid className='home-footer' divided='vertically' style={{ width: '80%' }}>
      <Grid.Row columns={3}>
        <Grid.Column textAlign='center'>
          <Header as='h4' icon>
            <Icon name='linkify' size='tiny' />
            Quick Links
          </Header>
          <List>
            <List.Item>
              <List.Content>
                <Link to='/public/pricing'>Pricing</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link to='/public/consultation'>Consultation</Link>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4' icon>
            <Icon name='legal' size='tiny' />
            Policies
          </Header>
          <List>
            <List.Item>
              <List.Content>
                <Link to='/public/terms-of-service'>Terms Of Service</Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <Link to='/public/privacy-policy'>Privacy Policy</Link>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4' icon>
            <Icon name='telegram plane' size='tiny' />
            Contact Us
          </Header>
          <CenteredBlock>
            <Segment basic compact={true}>
              <List>
                <List.Item>
                  <List.Icon name='phone' />
                  <List.Content>(000) 000 - 0000</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>help@iclean.com</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='calendar' />
                  <List.Content>M - F 8am to 10pm</List.Content>
                </List.Item>
              </List>
            </Segment>
          </CenteredBlock>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={16}>
        <Grid.Column width={11}>
          <TermsOfService />
        </Grid.Column>
        <Grid.Column width={5}>
          <SocialMedia />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </CenteredBlock>
)

export default Footer
