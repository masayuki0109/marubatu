/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Cell({isOdd, isEven, onClick}) {
  let mark = isOdd ? '◯'　: null;
  mark = isEven ? 'x' : mark;
  return <div css={cell} onClick={onClick}>{mark}</div>
}

const cell = css({
  color: 'red',
  fontSize: 20,
  border: '2px solid #000000',
  borderWidth: '1px',
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})