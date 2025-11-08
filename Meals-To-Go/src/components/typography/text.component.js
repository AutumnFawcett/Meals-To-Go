import React from 'react';
import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const titleError = (theme) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.title};

`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.medium};
`;
const h5 = (theme) => `
  font-size: ${theme.fontSizes.h5};
  font-weight: ${theme.fontWeights.medium};
`;

const h4 = (theme) => `
  font-size: ${theme.fontSizes.h4};
  font-weight: ${theme.fontWeights.medium};
`;

const h3 = (theme) => `
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.medium};
`;

const h2 = (theme) => `
  font-size: ${theme.fontSizes.h2};
  font-weight: ${theme.fontWeights.bold};
`;

const h1 = (theme) => `
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.bold};
`;

const button = (theme) => `
  font-size: ${theme.fontSizes.button};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  titleError,
  hint,
  title,
  h5,
  h4,
  h3,
  h2,
  h1,
  button,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => (variants[variant] || variants.body)(theme)}
`;

Text.defaultProps = {
  variant: "body",
};


/*
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => {
    const styleFn = variants[variant] || variants.body;
    return styleFn(theme);
  }}
`;
*/
