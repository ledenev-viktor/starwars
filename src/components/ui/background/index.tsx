import styled from '@emotion/styled';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

type BackgroundProps = {
  className?: string;
  backgrounds: string[];
  children: ReactNode;
};

const BackgroundBase = ({
  className,
  backgrounds,
  children,
}: BackgroundProps) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const intervalBackgroundRef = useRef<number>();

  useLayoutEffect(() => {
    const changeBackgroundColor = () => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
    };

    intervalBackgroundRef.current = setInterval(changeBackgroundColor, 5000);

    return () => clearInterval(intervalBackgroundRef.current);
  }, []);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${location.origin}/public/${backgrounds[backgroundIndex]})`,
      }}
    >
      {children}
    </div>
  );
};

export const Background = styled(BackgroundBase)`
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s ease;
  background-position: center;
`;
