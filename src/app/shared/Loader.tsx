import React from 'react';

import { Spinner, LoaderWrapper, Track } from './Loader.styles';

const SIZE = 60;
const STROKE_WIDTH = 4;
const CENTRE = SIZE / 2;
const RADIUS = SIZE / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = Math.PI * 2 * RADIUS;
const OFFSET = -CIRCUMFERENCE * 0.75;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE}>
        <Track
          cx={CENTRE}
          cy={CENTRE}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          fill="none"
        />
        <Spinner
          cx={CENTRE}
          cy={CENTRE}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={OFFSET}
          strokeLinecap="round"
        />
      </svg>
    </LoaderWrapper>
  );
};
