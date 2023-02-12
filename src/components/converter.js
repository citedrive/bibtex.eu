import * as React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  border: 4px solid #000;
  border-radius: 36px;
  padding: 1rem;
  
`;

const Input = styled.input`
  border: 0px solid #000;
  border-radius: 36px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  border: 0px solid #000;
  border-radius: 36px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  pointer: "cursor";
`;




const Converter = ({from, to}) => {

    return (
    <>
    <Wrapper>
     {from === "doi" && to === "bibtex" &&
       <>
       <Input autofocus placeholder={"Paste the DOI"} ></Input>
      <Button disabled>Convert DOI to BibTeX</Button>
      
      <br></br>
       </>
      
       }
       </Wrapper>
    </>
     );
}

export default Converter;