import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  height: 90px;
  width: 100%;
  bottom: 0;
  z-index: 999;
  background: rgb(0, 204, 221);
  background: linear-gradient(
    344deg,
    rgba(0, 204, 221, 1) 0%,
    rgba(123, 101, 255, 1) 100%
  );
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  padding: 1.4rem 2rem;
`;

const Button = styled.button`
  background: #fff;
  height: 50px;
  padding: 1rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: 800;
`;

const Letters = styled.div`
  color: #fff;
  font-weight: 800;
`;

const BottomBanner = () => {
  return (
    <>
      <Wrapper
        onClick={() => {
          window.open("https://citedrive.com/?via_bibtex.eu", "_blank");
        }}
      >
        <Letters>
          <p style={{ marginBottom: 0}}>
          Are you looking for a simple online BibTeX manager?
          </p>
          <p style={{fontWeight: 400}}>
          CiteDrive is a bibtex-based collaborative reference manager that integrates seamlessly with Overlearf and RStudio. Check it out, it's completely free!
          </p>
        </Letters>
        <Button>Sign up free</Button>
      </Wrapper>
    </>
  );
};

export default BottomBanner;
