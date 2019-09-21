import React from 'react';
import styled from 'styled-components';

import { MoveDirection } from '../typings/moveDirection';

const mapMoveDirectionToAngle = {
  Left: -90,
  Right: 90,
  Up: 0,
  Down: 180,
};

interface StylingProps {
  animation?: string;
  transform: string;
}

const Wrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: blue;
  transform: ${(p: StylingProps) => p.transform};
`;

const Front = styled.div`
  width: 5px;
  height: 5px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
`;

interface OwnProps {
  moveDirection: MoveDirection;
}

type Props = OwnProps;

const Player: React.FC<Props> = ({ moveDirection }) => {
  const transform = `rotate(${mapMoveDirectionToAngle[moveDirection]}deg)`;
  return (
    <Wrapper transform={transform}>
      <Front />
    </Wrapper>
  );
};

export default Player;
