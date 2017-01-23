// extend Vue
import * as Vue from "vue"

interface Material {
  registerTheme(name: string, spec: ThemeSpec): void;
  registerTheme(specs: { [name: string]: ThemeSpec; }): void;
  /* applyCurrentTheme(themeName: string): void; Not documented... */
  setCurrentTheme(themeName: string): void;
}

interface ColorAndHue {
  color: string;
  hue: string|number;
}

interface ThemeSpec {
  primary: string|ColorAndHue,
  accent?: string|ColorAndHue,
  warn?: string|ColorAndHue,
  background?: string|ColorAndHue
}

declare module 'vue' {
  export const material: Material;
}
