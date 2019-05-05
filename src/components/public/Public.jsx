import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TermsOfService from './TermsOfService'
import PrivacyPolicy from './PrivacyPolicy'
import Pricing from './Pricing'
import Consultation from './Consultation'

const Public = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/public/terms-of-service' component={TermsOfService} />
      <Route exact path='/public/privacy-policy' component={PrivacyPolicy} />
      <Route exact path='/public/pricing' component={Pricing} />
      <Route exact path='/public/consultation' component={Consultation} />
    </Switch>
  </React.Fragment>
)

export default Public
