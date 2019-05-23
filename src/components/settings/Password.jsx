
import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import ResetPasswordForm from './ResetPasswordForm'


const Password = () => {
  return (
    <Segment.Group>
      <Segment>
        <Header as='h2' icon>
          <Icon name='settings' />
          Reset Your Password
          <Header.Subheader>
            Please complete the two forms below inorder to complete the process
            of resetting your current password. You must provide both your
            old password, as well as, a new password along with the new password's
            confirmation.
          </Header.Subheader>
        </Header>
      </Segment>
      <Segment>
        <ResetPasswordForm />
      </Segment>
    </Segment.Group>
  )
}

export default Password
