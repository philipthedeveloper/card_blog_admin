import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorContainer>
        <ErrorHeading>
          {" "}
          Oops!
          <span role={"img"} aria-label="error emoji">
            😤
          </span>
        </ErrorHeading>
        <ErrorText>We couldn't found the page you are looking for.</ErrorText>
        <Link to={"/"} style={linkStyle}>
          Go back to Homepage
        </Link>
      </ErrorContainer>
    </ErrorPageContainer>
  );
}

const ErrorPageContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: (--main-background);
`;
const ErrorContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: (--main-background);
`;
const ErrorHeading = styled.h2`
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--textColor);
`;
const ErrorText = styled.p`
  font-size: 0.8rem;
  color: var(--textColor);
  margin-bottom: 1rem;
  font-weight: 400;
`;
const linkStyle = {
  fontWeight: "300",
  textAlign: "center",
  maxWidth: "200px",
};

export default ErrorPage;
