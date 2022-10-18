import styled from 'styled-components';

type MessageProps = {
  content: string;
  side: string;
};

type StyledMessageProps = {
  side: string;
};

const StyledMessage = styled.div<StyledMessageProps>`
  color: black;
  background-color: rgb(0, 162, 255);
  opacity: 0.9;
  border-radius: 70px;
  max-width: 300px;
  width: fit-content;
  padding: 6px 18px 6px 18px;
  margin: 10px;
  align-self: ${(props) => (props.side === 'left' ? 'flex-start' : 'flex-end')};
`;

export const Message = ({ content, side }: MessageProps) => {
  return <StyledMessage side={side}>{content}</StyledMessage>;
};
