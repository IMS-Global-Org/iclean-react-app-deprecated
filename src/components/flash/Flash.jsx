import React from 'react'
import { connect  } from 'react-redux'
import { Segment, Message  } from 'semantic-ui-react'
import styled from 'styled-components'

import { clearFlash  } from '../../actions/flash'

const FlashBlock = styled(Segment)`
  display: flex;
  justify-content: center;
`
const StackMsg = styled.p`
  text-align: center;
`


const Flash = ({ message, stack, msgType, dispatch }) => {

  const MsgTypes = {
    error: false,
    success: false,
    info: false,
  }
  MsgTypes[msgType] = true

  if( message && msgType  ) {
    setTimeout(() => dispatch(clearFlash()), 5000)
    return (
      <FlashBlock basic>
        <Message {...MsgTypes}>
          <Message.Header>{message}</Message.Header>
          { stack &&
            <StackMsg>{ stack  }</StackMsg>
          }
        </Message>
      </FlashBlock>
    )
  } else { return '' }
}

const mapStateToProps = (state, props) => {
  return { ...state.flash }
}

export default connect(mapStateToProps)(Flash)
