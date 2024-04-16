// src/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
