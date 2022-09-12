import styled, { css }  from 'styled-components'

interface IBtn {
  primary: boolean,

}

const Button = styled.button<IBtn>`
background: transparent;
border-radius: 6px;
border: 2px solid;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props => props.primary && css`
  background: #E4B062;
  color: white;
`}
`;

 export function Login() {
  return (
    <div className='authContainer'>

      <h1>Autorization</h1>
      <p>login</p>
      <p>password</p>
      <Button primary>Submit</Button>
      </div>
  )
}

