import { type ReactElement } from 'react'
import Stack from 'react-bootstrap/Stack'
import NavMenu from '@/components/molecules/NavMenu/NavMenu'
import MyAccount from '@/components/molecules/MyAccount/MyAccount'
// import Language from '@/components/molecules/Language/Language'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = (): ReactElement => (
  <header className="section-dark">
    <Container>
      <Row>
        <Col style={{ minHeight: '100px' }}>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <NavMenu />
            </div>
            <Stack direction="horizontal" gap={3} className="p-2 ms-auto">
              {/* <Language /> */}
              <MyAccount />
            </Stack>
          </Stack>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
