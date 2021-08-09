import React from 'react';
import styled from 'styled-components';

const DarkPath = styled.path`
  fill: ${({ theme }) => theme.colors.manufacturer.dark};
`;

const LightPath = styled.path`
  fill: ${({ theme }) => theme.colors.manufacturer.light};
`;

export const Logo = props => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 476.67 89.07"
    title="logo Polpharma"
    {...props}
  >
    <g>
      <LightPath
        d="M98,11.31C86.61-5.23,56.41-3.88,30.55,14.32C20.54,21.37,12.65,29.9,7.39,38.68h16.5 c3.42-5.95,8.1-11.79,13.9-17.02c19.65-17.7,44.76-21.79,56.1-9.13c5.77,6.45,6.86,16,3.94,26.15h2.33 C103.57,28.51,103.12,18.74,98,11.31 M60.03,18c-6.07,5.62-12.25,12.62-18.04,20.68h11.83c5.8-8.05,11.97-15.06,18.04-20.68H60.03z"
      />
      <DarkPath
        d="M132.82,66.07c6.4,0,11.09-0.69,16.28-4.83c3.72-2.98,6.12-6.58,7.67-10.88c0.87-2.41,1.38-4.67,1.4-6.61 c0.01-0.82-0.07-1.61-0.21-2.34c-0.32-1.65-1.02-3.17-2.09-4.32c-2.17-2.34-5.64-3.37-12.45-3.37h-5.06c-7.73,0-12.4,3.5-14.6,8.85 l-12.73,34.15c-0.08,0.25-0.04,0.51,0.08,0.71c0.07,0.11,0.15,0.19,0.27,0.26c0.25,0.15,0.45,0.15,0.65,0.18 c0.9,0.12,3.16,0.16,5.69-0.91c3.29-1.4,4.58-4.21,4.91-5.07l0.92-2.46c1.02-2.17,2.96-3.39,6.08-3.35L132.82,66.07 M133.11,44.18 c0.86-2.3,3.02-3.69,5.58-3.69c0,0,1.64,0,2.36,0c2.03,0,8.68-0.33,7.35,6.02c-1.84,8.77-7.31,12.85-14.8,12.85c0,0-4.6,0-5.15,0 c-0.56,0-1.02,0.1-1.02,0.1L133.11,44.18z M235.8,66.07c6.4,0,11.09-0.69,16.28-4.83c3.72-2.98,6.12-6.58,7.67-10.88 c0.87-2.41,1.38-4.67,1.4-6.61c0.01-0.82-0.07-1.61-0.21-2.34c-0.32-1.65-1.02-3.17-2.09-4.32c-2.17-2.34-5.64-3.37-12.45-3.37 h-5.06c-7.74,0-12.41,3.5-14.6,8.85L214,76.72c-0.08,0.25-0.04,0.51,0.08,0.71c0.07,0.11,0.15,0.19,0.27,0.26 c0.25,0.15,0.45,0.15,0.65,0.18c0.9,0.12,3.16,0.16,5.69-0.91c3.29-1.4,4.58-4.21,4.91-5.07l0.92-2.46 c1.02-2.17,2.96-3.39,6.08-3.35L235.8,66.07z M236.08,44.18c0.86-2.3,3.02-3.69,5.58-3.69c0,0,1.64,0,2.36,0 c2.02,0,8.68-0.33,7.35,6.02c-1.84,8.77-7.31,12.85-14.8,12.85c0,0-4.6,0-5.15,0c-0.56,0-1.02,0.1-1.02,0.1L236.08,44.18z M375.09,40.59c0,0-8.49,0-8.69,0c-0.82,0-1.9,0.44-2.52,0.94c-0.72,0.56-1.33,1.3-1.67,2.24l-5.88,16.31 c-0.32,0.86-1.58,3.67-4.85,5.07c-2.51,1.08-4.77,1.04-5.67,0.92c-0.2-0.03-0.4-0.04-0.65-0.19c-0.13-0.07-0.21-0.16-0.28-0.26 c-0.13-0.2-0.17-0.46-0.09-0.71l8.05-22.35c2.13-5.35,6.75-8.85,14.49-8.85l15.31-0.01c0.17,0.21,0.18,0.48,0.15,0.71 C382.23,37.9,379.45,40.59,375.09,40.59z M291.83,46.45c0.47-1.29,0.71-2.29,0.71-3.11c0.01-0.65-0.14-1.23-0.55-1.68 c-0.89-0.88-2.34-1.04-4.6-1.07c0,0-4.65,0-4.85,0c-0.82,0-1.9,0.44-2.52,0.94c-0.72,0.56-1.34,1.3-1.68,2.24l-5.88,16.31 c-0.32,0.86-1.58,3.67-4.85,5.07c-2.51,1.08-4.78,1.04-5.67,0.92c-0.2-0.03-0.4-0.04-0.65-0.19c-0.13-0.07-0.21-0.16-0.28-0.26 c-0.13-0.2-0.17-0.46-0.09-0.71l13.38-37.14c1.72-4.15,5.13-5.76,11.64-5.84c0,0,0.04,0,0.07,0.02c0.03,0.03,0.01,0.08,0.01,0.08 l-4.22,11.77c0,0,0.57-0.13,1.28-0.13c0.71,0,7.62,0,7.62,0c5.63-0.02,8.93,0.93,10.63,2.77c0.95,1.02,1.43,2.3,1.42,4.01 c0,1.4-0.35,3.06-1.07,5.04l-5.26,14.6c-0.32,0.86-1.25,3.67-4.52,5.07c-2.51,1.08-4.77,1.04-5.67,0.92 c-0.2-0.03-0.4-0.04-0.65-0.19c-0.12-0.07-0.21-0.16-0.28-0.26c-0.13-0.2-0.17-0.46-0.09-0.71L291.83,46.45z M212.35,60.09 c-0.32,0.86-1.58,3.67-4.85,5.07c-2.51,1.08-4.77,1.04-5.67,0.92c-0.2-0.03-0.4-0.04-0.65-0.19c-0.13-0.07-0.21-0.16-0.28-0.26 c-0.13-0.2-0.17-0.46-0.09-0.71l13.38-37.14c1.72-4.15,5.29-5.76,11.79-5.84c0,0,0.04,0,0.07,0.02c0.03,0.03,0.01,0.08,0.01,0.08 L212.35,60.09z M418.12,40.6c-3.6,0-4.74,2.08-6.05,5.7l-4.99,13.79c-0.32,0.86-1.25,3.67-4.52,5.07 c-2.51,1.08-4.77,1.04-5.68,0.92c-0.2-0.03-0.4-0.04-0.65-0.19c-0.13-0.07-0.21-0.16-0.28-0.26c-0.13-0.2-0.17-0.46-0.09-0.71 l8.74-24.32l-8.24,0c-0.82,0-1.9,0.44-2.52,0.94c-0.72,0.56-1.33,1.3-1.67,2.24l-5.88,16.31c-0.32,0.86-1.58,3.67-4.85,5.07 c-2.51,1.08-4.78,1.04-5.67,0.92c-0.2-0.03-0.4-0.04-0.65-0.19c-0.12-0.07-0.21-0.16-0.28-0.26c-0.13-0.2-0.17-0.46-0.09-0.71 l8.05-22.35c2.13-5.35,6.76-8.87,14.49-8.87h25.65c5.63-0.02,8.93,0.91,10.63,2.75c0.95,1.02,1.43,2.3,1.42,4.01 c0,1.4-0.35,3.06-1.07,5.04l-5.26,14.6c-0.32,0.86-1.25,3.67-4.52,5.07c-2.51,1.08-4.78,1.04-5.67,0.92 c-0.2-0.03-0.4-0.04-0.65-0.19c-0.12-0.07-0.21-0.16-0.28-0.26c-0.13-0.2-0.17-0.46-0.09-0.71l6.65-18.46 c0.47-1.29,0.71-2.29,0.71-3.11c0.02-0.65-0.14-1.23-0.55-1.68c-0.88-0.88-2.33-1.04-4.6-1.07H418.12z M199.94,50.01 c0.77-2.13,1.15-4.09,1.16-5.88c0.03-2.77-0.82-5.09-2.51-6.9c-2.43-2.57-6.5-3.99-11.95-3.98c-11.74,0.03-21.68,6.58-25.36,16.8 c-0.77,2.12-1.15,4.09-1.16,5.88c-0.03,2.77,0.82,5.09,2.51,6.9c2.43,2.57,6.5,3.99,11.96,3.98 C186.32,66.77,196.26,60.23,199.94,50.01z M190.06,49.97c-2.21,6.16-7.08,10.04-13.06,10.06c-2.35,0-4.25-0.58-5.4-1.82 c-0.91-0.97-1.31-2.29-1.31-3.82c0.01-1.28,0.3-2.71,0.87-4.31c2.21-6.16,7.08-10.04,13.06-10.06c2.35,0,4.24,0.59,5.4,1.82 c0.91,0.97,1.31,2.28,1.31,3.82C190.92,46.93,190.63,48.37,190.06,49.97z M317.16,59.78c-2.69,0.03-5.15-0.16-4.37-2.72 c0.91-2.99,2.67-4.32,6.8-4.32l12.42,0l-1.28,3.51c-0.88,2.04-2.48,3.33-5.16,3.52H317.16z M310.51,66.3l17.25-0.01 c0.99-0.03,3.59-0.05,6.33-1.24c3.56-1.55,4.43-4.36,5.05-5.8l4.89-13.57c0.72-1.98,1.07-3.65,1.07-5.04 c0.01-1.71-0.47-2.99-1.42-4.01c-1.7-1.84-3.4-2.76-9.04-2.75c0,0-11.63,0-15.26,0c-3.97,0-6.2,2.47-7.36,5.36 c0,0-0.23,0.57,0.2,1.08c0.23,0.27,0.48,0.44,1.04,0.46h17.67c5.36,0,4.23,3.13,3.27,5.84h-12.96c-11.03,0-15.65,2.79-18.14,10.42 C301.46,61.62,303.07,66.3,310.51,66.3z M448.74,59.78c-2.69,0.03-5.15-0.16-4.37-2.72c0.91-2.99,2.67-4.32,6.79-4.32l12.41,0 l-1.28,3.51c-0.88,2.04-2.48,3.33-5.16,3.52H448.74z M442.08,66.3l17.25-0.01c1-0.03,3.6-0.05,6.33-1.24 c3.56-1.55,4.43-4.36,5.05-5.8l4.89-13.57c0.72-1.98,1.07-3.65,1.07-5.04c0.01-1.71-0.47-2.99-1.42-4.01 c-1.7-1.84-3.4-2.76-9.04-2.75c0,0-11.63,0-15.26,0c-3.97,0-6.2,2.47-7.36,5.36c0,0-0.23,0.57,0.2,1.08 c0.23,0.27,0.48,0.44,1.04,0.46h17.67c5.36,0,4.23,3.13,3.27,5.84h-12.96c-11.03,0-15.65,2.79-18.13,10.42 C433.03,61.62,434.65,66.3,442.08,66.3z M96.59,46.98C91.4,56.75,82.91,66.4,71.81,74.22C45.95,92.42,15.74,93.77,4.35,77.23 c-5.6-8.13-5.61-19.07-1.1-30.26H36.4c-5.12,8.12-9.17,16.19-12.05,23.67h11.83c2.88-7.48,6.94-15.55,12.05-23.67H96.59z"
      />
    </g>
  </svg>
);