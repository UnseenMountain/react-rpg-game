import React from 'react';
import styled from 'styled-components';

import { ANIMATION_SPEED } from '../constants/config';
import { CELL_WIDTH_IN_PIXELS, GRID_HEIGHT, GRID_WIDTH } from '../constants/config';
import { CellContent } from '../typings/cellContent';
import { MoveDirection } from '../typings/moveDirection';
import { Position } from '../typings/position';
import Cell from './Cell';

interface StylingProps {
  left: number;
  top: number;
}

const Wrapper = styled.div`
  width: ${() => `${CELL_WIDTH_IN_PIXELS * GRID_HEIGHT}px`};
  height: ${() => `${CELL_WIDTH_IN_PIXELS * GRID_WIDTH}px`};
  display: flex;
  flex-wrap: wrap;
  border: solid 1px black;
  position: relative;
  left: ${(p: StylingProps) => `${p.left}px`};
  top: ${(p: StylingProps) => `${p.top}px`};
  transition: ${() => `top ${ANIMATION_SPEED / 1000}s, left ${ANIMATION_SPEED / 1000}s`};
  background-color: white;
`;

interface Props {
  moveDirection: MoveDirection;
  playerPosition: Position;
}

const Map: React.FC<Props> = ({ playerPosition }) => {
  const createMapContent = () => {
    const mapContent: CellContent[][] = [];
    for (let i = 0; i < GRID_WIDTH; i += 1) {
      mapContent[i] = [];
      for (let j = 0; j < GRID_HEIGHT; j += 1) {
        // This will be filled out later with some tiles
        mapContent[i][j] = 0;
      }
    }
    return mapContent;
  };

  const renderCells = () => {
    return createMapContent().map((row, posX) => {
      return row.map((column, posY) => {
        const position = `${posX}-${posY}`;
        return <Cell key={position} content={column} />;
      });
    });
  };

  const mapLeftPosition = (-playerPosition[1] + 5) * CELL_WIDTH_IN_PIXELS - 1;
  const mapUpPosition = (-playerPosition[0] + 5) * CELL_WIDTH_IN_PIXELS - 1;

  return (
    <Wrapper left={mapLeftPosition} top={mapUpPosition}>
      {renderCells()}
    </Wrapper>
  );
};

export default Map;
