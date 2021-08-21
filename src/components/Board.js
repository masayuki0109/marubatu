/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Cell from "./Cell";
import { useState, useEffect } from "react";

const wrapper = css({
  display: "flex",
  flexWrap: "wrap",
  width: 127,
});

const even = (v) => v % 2 === 0;
const odd = (v) => v % 2 !== 0;

export default function Board() {
  const [history, setHistory] = useState([]);
  const oddHistory = history.filter((_, i) => odd(i + 1));
  const evenHistory = history.filter((_, i) => even(i + 1));

  useEffect(() => {
    if (3 > oddHistory.length) return 

    if (checkVictory(oddHistory)) alert('先攻の勝ち')
    if (checkVictory(evenHistory)) alert('後攻の勝ち')
  }, [evenHistory,oddHistory])

  const cellOnClick = (index) => {
    // すでに選択されていたら、何もしない
    if (history.includes[index]) return;

    setHistory((p) => [...p, index]);
  };
  return (
    <div css={wrapper}>
      {[...Array(9)].map((_, i) => (
        <Cell
          key={i}
          isOdd={oddHistory.includes(i + 1)}
          isEven={evenHistory.includes(i + 1)}
          onClick={() => cellOnClick(i + 1)}
        />
      ))}
    </div>
  );
}

const checkVictory = (arr) => {
  const yoko = [...Array(3)].map((_, i) => [1 + i * 3, 2 + i * 3, 3 + i * 3]);
  const tate = [...Array(3)].map((_, i) => [1 + i, 4 + i , 7  + i]) 
  const naname = [[1,5,9], [3,5,7]]
  const winArrs = [...yoko, ...tate, ...naname] 
  const isInclude = (v) => arr.includes(v)
  const result = winArrs.filter(arr => arr.every(isInclude))
  return result.length >= 1
};
