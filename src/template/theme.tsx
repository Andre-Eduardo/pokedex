import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../context/theme";
import theme from '../styles'

type Props = {
  children: React.ReactNode;
}
export function Theme({ children }: Props) {
  const { currentTheme } = useTheme()
  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>
}