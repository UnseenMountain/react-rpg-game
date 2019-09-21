import React from 'react';
import styled from 'styled-components';

import { CELL_WIDTH_IN_PIXELS } from '../constants/config';
import { CellContent } from '../typings/cellContent';

const Wrapper = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: ${() => `${CELL_WIDTH_IN_PIXELS}px`};
  height: ${() => `${CELL_WIDTH_IN_PIXELS}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  content: CellContent;
}

const Cell: React.FC<Props> = () => {
  const renderContent = () => {
    return null;
  };

  return <Wrapper>{renderContent()}</Wrapper>;
};

export default Cell;
