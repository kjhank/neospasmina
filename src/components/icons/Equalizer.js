import React from 'react';

export const Equalizer = props => (
  <svg
    width={40}
    height={28}
    viewBox="0 0 10 7"
    {...props}
  >
    <g>
      <rect
        id="bar1"
        transform="translate(0.500000, 6.000000) rotate(180.000000) translate(-0.500000, -6.000000) "
        x="0"
        y="5"
        width="1"
        height="2"
      />
      <rect
        id="bar2"
        transform="translate(3.500000, 4.500000) rotate(180.000000) translate(-3.500000, -4.500000) "
        x="3"
        y="2"
        width="1"
        height="5"
      />
      <rect
        id="bar3"
        transform="translate(6.500000, 3.500000) rotate(180.000000) translate(-6.500000, -3.500000) "
        x="6"
        y="0"
        width="1"
        height="7"
      />
      <rect
        id="bar4"
        transform="translate(9.500000, 5.000000) rotate(180.000000) translate(-9.500000, -5.000000) "
        x="9"
        y="3"
        width="1"
        height="4"
      />
    </g>
  </svg>
);
