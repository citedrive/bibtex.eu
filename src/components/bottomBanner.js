import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  z-index: 999;
  background: linear-gradient(
    344deg,
    rgba(0, 204, 221, 1) 0%,
    rgba(123, 101, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
  cursor: pointer;
`;

const Button = styled.button`
  background: #fff;
  height: 50px;
  color: #000;
  min-width: 120px;
  padding: 1rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: 800;
`;

const Letters = styled.div`
  color: #fff;
`;

const MainMessage = styled.p`
  margin-bottom: 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const HighlightedText = styled.span`
  text-decoration: underline;
  text-decoration-color: #00ff6b; 
  text-decoration-thickness: 5px; 
`;

const SecondaryMessage = styled.p`
  font-weight: 400;
`;

const BottomBanner = () => (
  <Wrapper
    onClick={() => {
      window.open("https://citedrive.com/?via_bibtex.eu", "_blank", "noopener,noreferrer");
    }}
    aria-label="Banner - Advertisement for CiteDrive"
  >
    <Letters>
      <MainMessage>
      Are you in search of a simple and <HighlightedText>cost-free</HighlightedText> online <HighlightedText>BibTeX</HighlightedText> manager?
      </MainMessage>
      <SecondaryMessage>
        CiteDrive is a bibtex-based collaborative reference manager that integrates seamlessly with Overleaf and RStudio.
      </SecondaryMessage>
    </Letters>
    <Button>Sign up free</Button>
  </Wrapper>
);

export default BottomBanner;