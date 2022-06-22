import { BoardState } from './GameState'

type LogProps = {
  history: BoardState[]
  jumpTo: (step: number) => void
}

export function Log(props: LogProps) {
  console.log(props)
  console.log(props.history[5])
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index} className="LogItem">
            <button onClick={() => props.jumpTo(index)}>
              {index === 0 ? 'Start' : `Move #${index}`}
            </button>
          </li>
        )
      })}
    </ol>
  )
}
