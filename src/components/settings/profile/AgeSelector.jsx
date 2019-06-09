import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { flashError } from '../../../actions/flash'
import { Form } from 'semantic-ui-react'
import { range } from 'lodash'

const ageOptions = range(1, 120).map( num => ({
  key: num, text: num, value: num,
}))

const AgeSelector = ({ userId, dispatch }) => {
  const [selected, setSelected] = useState('')

  // axios server call to update selection
  useEffect(() => {
    if( selected ) {
      const url = `/api/users/${userId}/demographics`
      const params = { demographic: { age: selected} }
      axios.patch(url, params)
        .then( res => setSelected(res.data.age))
        .catch( res => dispatch(flashError(res.response.data)))
    }
  }, [selected, userId, dispatch])

  // axios server call for existing demographic data
  useEffect(() => {
    axios.get(`/api/users/${userId}/demographics`)
      .then( res => setSelected(res.data.age))
      .catch( res => dispatch(flashError(res.response.data)))
  }, [userId, dispatch])

  const onChange = (e,{value}) => setSelected(value)

  return (
    <Form>
      <Form.Select
        fluid
        label='Age'
        value={selected}
        options={ageOptions}
        placeholder='Current Age'
        onChange={onChange}
      />
    </Form>
  )
}

const mapStateToProps = (state, props) => ({ userId: state.user.id })

export default connect(mapStateToProps)(AgeSelector)
