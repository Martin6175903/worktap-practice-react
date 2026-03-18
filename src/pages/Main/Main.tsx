import { memo, useCallback, useEffect, useMemo, useState } from 'react';

type ChildProps = {
  value: object;
  clickChild: () => void;
};

const Child = memo(({ value, clickChild }: ChildProps) => {
  console.log('Дочерний компонент делает ререндер');

  return (
    <div style={{ display: 'flex', gap: 15 }}>
      <div>Дочерний компонент</div>
      <div>{value.toString()}</div>
      <button onClick={clickChild}>Click</button>
    </div>
  );
});

export const Main = () => {
  const [count, setCount] = useState(0);

  const value = useMemo(
    () => ({
      value: 1,
    }),
    [],
  );

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const childClick = useCallback(() => console.log('click'), []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log('Effect');
  }, []);

  console.log('Родительский компонент делает ререндер');

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        Практика
        <div>
          Counter
          <button onClick={handleClick}>Count: {count}</button>
        </div>
      </div>
      <Child value={value} clickChild={childClick} />
    </div>
  );
};
