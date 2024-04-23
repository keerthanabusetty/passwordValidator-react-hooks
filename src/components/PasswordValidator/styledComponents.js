// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 90px;
  background-color: #24263c;
  @media screen and (max-width: 576px) {
    padding: 70px;
  }
`
export const CardContainer = styled.div`
  display: flex;
  background-color: #383a4e;
  padding: 40px;
  border-radius: 9px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 15px;
  padding-bottom: 8px;
  font-family: 'Roboto';
`
export const Password = styled.input`
  background-color: #edeeff;
  border-radius: 4px;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 8px;
  font-family: 'Roboto';
`
