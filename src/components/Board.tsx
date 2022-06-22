import { BoardState } from './GameState'
import { TileProps, Tile } from './Tile'

type BoardProps = {
  board: BoardState
  onClick: (tile: number) => void
}

export function Board({ board, onClick }: BoardProps) {
  const createProps = (tile: number): TileProps => {
    return {
      value: board[tile],
      onClick: () => onClick(tile),
    }
  }
  return (
    <div className="Board">
      <div className="BoardRow">
        <Tile {...createProps(0)} />
        <Tile {...createProps(1)} />
        <Tile {...createProps(2)} />
      </div>
      <div className="BoardRow">
        <Tile {...createProps(3)} />
        <Tile {...createProps(4)} />
        <Tile {...createProps(5)} />
      </div>
      <div className="BoardRow">
        <Tile {...createProps(6)} />
        <Tile {...createProps(7)} />
        <Tile {...createProps(8)} />
      </div>
    </div>
  )
}
