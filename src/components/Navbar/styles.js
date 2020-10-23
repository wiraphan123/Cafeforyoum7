import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  z-index: 9001;
  background-color: ${prprs => (prprs.isScroll ? '#fff' : 'transparent')};
  position: ${props => (props.isScroll ? 'fixed' : 'static')};
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`
export const Logo = styled.div``

export const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
export const Action = styled.li`
  padding: 0 1rem;
`