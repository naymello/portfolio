import styled from 'styled-components'

const Button = styled.button`
  font-weight: bold;
  margin-left: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border-color: #040404;
  background-color: ${props => props.primary ? '#040404' : 'white'};
  color: ${props => props.primary ? 'white' : '#040404'};
`

export default Button