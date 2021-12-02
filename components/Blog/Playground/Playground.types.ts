import { ColorMode } from "@agney/playground/dist/utils/theme";

export interface CodePlaygroundProps {
  id: string,
  mode?: ColorMode,
  defaultEditorTab: string,
  markup: string,
  cssCode?: string,
  javaScript?: string,
}
