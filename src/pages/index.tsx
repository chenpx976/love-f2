import React from 'react';
import ReactDOM from 'react';
import Canvas from '@antv/f2-react';
console.log("🚀 ~ file: index.tsx ~ line 4 ~ Canvas", Canvas)
import { Chart, Interval, Canvas as F2Canvas } from '@antv/f2';
console.log("🚀 ~ file: index.tsx ~ line 6 ~ Chart", Chart)
console.log("🚀 ~ file: index.tsx ~ line 6 ~ F2Canvas", F2Canvas)

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

export default function HomePage() {
  
  return (
    <div>
      <Canvas>
        <Chart data={data}>
          <Interval x='genre' y='sold' />
        </Chart>
      </Canvas>
    </div>
  );
}
