import { jsx, Canvas, Chart, Interval, Axis, Tooltip, Legend } from '@antv/f2';
import { useEffect, useRef } from 'react';

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];
const DocsPage = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    console.log('🚀 ~ file: docs.tsx ~ line 16 ~ useEffect ~ context', context);
    // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const { props } = (
      <Canvas context={context} pixelRatio={window.devicePixelRatio}>
        <Chart data={data}>
          <Legend />
          <Axis field='genre' />
          <Axis field='sold' />
          <Tooltip showTooltipMarker={true} />
          <Interval x='genre' y='sold' color='genre' />
        </Chart>
      </Canvas>
    );

    const canvas = new Canvas(props);
    canvas.render();
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} id='myChart' width='400' height='260'></canvas>
    </div>
  );
};

export default DocsPage;
