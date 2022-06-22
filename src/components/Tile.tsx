import { Value } from './GameState'

export type TileProps = {
  value: Value
  onClick: () => void
}

export function Tile(props: TileProps, color: number) {
  return (
    <button onClick={props.onClick} className="Tile">
      {props.value}
    </button>
  )
}
