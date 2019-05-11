import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Icon, Popup } from 'semantic-ui-react'
import AddressForm from './AddressForm'
import { indexUserAddresses } from '../../actions/user'


class ContactInfo extends Component {
  defaults = { addresses: '' }
  state = { ...this.defaults }

  componentDidMount = () => {
    const { addresses, dispatch } = this.props
    !addresses && dispatch(indexUserAddresses())
    this.setState({ addresses })
  }
  componentWillReceiveProps = (nextProps) => {
    const { addresses } = nextProps
    this.setState({ addresses })
  }

  renderAddresses = () => {
    const { addresses } = this.state
    if( addresses && addresses.length > 0 ) {
      return addresses.map( (address) => (
        address.id
          ? this.renderOldAddressForm(address)
          : this.renderNewAddressForm()
      ))
    } else {
      return this.renderNewAddressForm()
    }
  }

  renderOldAddressForm = (address) => (
    <Segment key={address.id} padded>
      <AddressForm address={address} />
    </Segment>
  )

  renderNewAddressForm = () => (
    <Segment key={0} padded>
      <AddressForm />
    </Segment>
  )

  onClick = () => this.setState({ addresses: [...this.state.addresses, {}] })

  render = () => (
    <Segment.Group>
      <Segment>
        <Popup
          trigger={<Icon
            name='add circle'
            color='green'
            size='large'
            onClick={this.onClick} />}
          content='Add new address'
        />
      </Segment>
      { this.renderAddresses() }
    </Segment.Group>
  )
}

const mapStateToProps = (state, props) => {
  return {
    addresses: state.user.addresses,
  }
}

export default connect(mapStateToProps)(ContactInfo)
