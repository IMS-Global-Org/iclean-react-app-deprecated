import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Layout, CenteredBlock, SectionHeader } from '../../lib/iclean-ui'


const Header = () => (
  <Layout>
    <CenteredBlock>
      <Image src='/images/vector-set-of-cleaning-service-workers-vector-clip-art_csp38102417.jpg' />
    </CenteredBlock>

    <SectionHeader icon='tag' title='Section One' />

    <Grid relaxed='very' columns={2} divided>
      <Grid.Column>
        <Image src='/images/54067828-cleaning-service-icons-and-two-women-cleaning-service-worker-holding-equipment-young-smiling-cleaner.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/90067171-vector-cartoon-style-illustration-of-cleaning-service-woman-character-housekeeping-icons-isolated-on.jpg' />
      </Grid.Column>
    </Grid>
  </Layout>
)

export default Header
