import styled from "styled-components";
import { useRef, useEffect } from "react";
import { colors, fontSizes } from "../../styles/theme";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.span`
  font-size: ${fontSizes.lg};
  color: ${colors.text};
`;

const NameInput = styled.input`
  border: none;
  border-color: transparent;
  background-color: ${colors.background};
  outline: none;
  display: inline;
  font-size: ${fontSizes.lg};
  font-weight: bold;
  color: ${colors.text};
`;

const AppContainer = () => {
  const nameInput = useRef(null);
  useEffect(() => nameInput.current.focus(), []);

  return (
    <Wrapper>
      <Title>I want to recommend </Title>
      <NameInput ref={nameInput} type="text" />
    </Wrapper>
  );
};

export default AppContainer;
