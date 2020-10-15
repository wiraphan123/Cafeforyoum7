import React from 'react'
import styled from 'styled-components'
import useScroll from '../utils/useScroll'
import { Link } from 'react-router-dom'
const Container = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5s;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`

const Logo = styled.div``

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Action = styled.li`
  padding: 0 1rem;
`

function NavBar () {
  const isScroll = useScroll(20)

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo>Logo</Logo>
        <ActionContainer>
          <Action>
            <Link to='/home'>Home</Link>
          </Action>
          <Action>
            <Link to='/review'>Review</Link>
          </Action>
          <Action>
            <Link to='/community'>community</Link>
          </Action>
          <Action>
            <Link to='/register'>register</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
