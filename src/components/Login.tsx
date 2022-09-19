import styled, { css }  from 'styled-components'

// const padding = '3em'

// const Section = styled.section`
//   color: white;

//   /* Pass variables as inputs */
//   padding: ${padding};

//   /* Adjust the background from the properties */
//   background: ${props => props.background};
// `


const Container = styled.div`
  background-color: #da7808;
  border-radius: 5px;
  padding: 1em;
`

const Title = styled.h1`
  font-weight: 300,bold;
`



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

    <Container>
    <Title> CANALSERVICE </Title>

  </Container>
      <h1>Autorization</h1>
      <p>login</p>
      <p>password</p>
      <Button primary>Submit</Button>
      </div>
  )
}

