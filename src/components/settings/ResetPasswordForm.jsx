import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Segment, Grid, Divider, Form, Button } from 'semantic-ui-react'

import { resetPassword } from '../../actions/auth'


const ResetPasswordForm = ({ dispatch, history }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(resetPassword(oldPassword, newPassword, newPasswordConfirm, () => {
      debugger
      history.push('/home')
    }))
  }

  return (
    <Form>
      <Segment placeholder>
        <Grid stackable textAlign='center'>
          <Divider vertical>And</Divider>

          <Grid.Row columns={2}>
            {/* Old password confirm */}
            <Grid.Column width={8}>
              <Form.Input
                label='Old Password'
                type='password'
                id='oldPassword'
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                required
              />
            </Grid.Column>

            {/* New Password Confirm */}
            <Grid.Column width={8}>
              <Form.Input
                label='New Password'
                type='password'
                id='newPassword'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
              <Form.Input
                label='New Password Confirm'
                type='password'
                id='newPasswordConfirm'
                walue={newPasswordConfirm}
                onChange={e => setNewPasswordConfirm(e.target.value)}
                required
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment basic textAlign='right'>
        <Button type='submit' onClick={onSubmit} positive>
          Submit
        </Button>
      </Segment>
    </Form>
  )
}

export default connect()(withRouter(ResetPasswordForm))
