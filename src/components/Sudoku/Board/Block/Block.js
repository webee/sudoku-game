import React from 'react';
import Cell from './Cell/Cell';
import styles from './Block.module.scss';

const Block = ({
  rowStart,
  colStart,
  activePos,
  activeVal,
  values,
  availableCells,
  cellClickedHandler,
  isNoting,
}) => {
  const isOdd = (rowStart + colStart) % 2 === 1;
  return (
    <div className={`${styles.Block} ${isOdd ? styles.Odd : ''}`}>
      <div className={styles.Row}>
        <Cell
          {...values[rowStart][colStart]}
          row={rowStart}
          col={colStart}
          activePos={activePos}
          activeVal={activeVal}
          available={availableCells && availableCells[rowStart][colStart]}
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart][colStart + 1]}
          row={rowStart}
          col={colStart + 1}
          activePos={activePos}
          activeVal={activeVal}
          available={availableCells && availableCells[rowStart][colStart + 1]}
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart][colStart + 2]}
          row={rowStart}
          col={colStart + 2}
          activePos={activePos}
          activeVal={activeVal}
          available={availableCells && availableCells[rowStart][colStart + 2]}
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
      </div>
      <div className={styles.Row}>
        <Cell
          {...values[rowStart + 1][colStart]}
          row={rowStart + 1}
          col={colStart}
          activePos={activePos}
          activeVal={activeVal}
          available={availableCells && availableCells[rowStart + 1][colStart]}
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart + 1][colStart + 1]}
          row={rowStart + 1}
          col={colStart + 1}
          activePos={activePos}
          activeVal={activeVal}
          available={
            availableCells && availableCells[rowStart + 1][colStart + 1]
          }
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart + 1][colStart + 2]}
          row={rowStart + 1}
          col={colStart + 2}
          activePos={activePos}
          activeVal={activeVal}
          available={
            availableCells && availableCells[rowStart + 1][colStart + 2]
          }
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
      </div>
      <div className={styles.Row}>
        <Cell
          {...values[rowStart + 2][colStart]}
          row={rowStart + 2}
          col={colStart}
          activePos={activePos}
          activeVal={activeVal}
          available={availableCells && availableCells[rowStart + 2][colStart]}
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart + 2][colStart + 1]}
          row={rowStart + 2}
          col={colStart + 1}
          activePos={activePos}
          activeVal={activeVal}
          available={
            availableCells && availableCells[rowStart + 2][colStart + 1]
          }
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
        <Cell
          {...values[rowStart + 2][colStart + 2]}
          row={rowStart + 2}
          col={colStart + 2}
          activePos={activePos}
          activeVal={activeVal}
          available={
            availableCells && availableCells[rowStart + 2][colStart + 2]
          }
          onClick={cellClickedHandler}
          isNoting={isNoting}
        />
      </div>
    </div>
  );
};

export default Block;