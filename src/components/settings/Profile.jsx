import React, { Suspense, lazy, useState } from 'react'
import { LoadingSpinner } from '../../lib/iclean-ui'
import { Accordion, Icon } from 'semantic-ui-react'

// Accordion SubSections
const ContactInfo = lazy(() => import('./profile/ContactInfo'))
const Demographics = lazy(() => import('./profile/Demographics'))
const Background = lazy(() => import('./profile/Background'))
const SocialMedia = lazy(() => import('./profile/SocialMedia'))
const SocialEconomics = lazy(() => import('./profile/SocialEconomics'))
const Psychographics = lazy(() => import('./profile/Psychographics'))

const SubSections = [
  { title: 'Contact Information', component: ContactInfo },
  { title: 'Demographics', component: Demographics },
  { title: 'Background', component: Background },
  { title: 'SocialMedia', component: SocialMedia },
  { title: 'SocialEconomics', component: SocialEconomics },
  { title: 'Psychographics', component: Psychographics },
]

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onClick = (e, titleProps) => {
    const { index: titleIndex } = titleProps
    const newIndex = activeIndex === titleIndex ? -1 : titleIndex
    setActiveIndex(newIndex)
  }

  return (
    <Accordion fluid styled>
      { SubSections.map((subSec, index) =>(
        <React.Fragment key={index}>
          <Accordion.Title active={activeIndex === index} index={index} onClick={onClick}>
            <Icon name='settings' />
            { subSec.title }
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <Suspense fallback={LoadingSpinner}>
              <subSec.component />
            </Suspense>
          </Accordion.Content>
        </React.Fragment>
      ))}
    </Accordion>
  )
}

export default Profile
