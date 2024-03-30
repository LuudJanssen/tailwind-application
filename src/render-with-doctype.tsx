import { renderToString } from "react-dom/server";

/**
 * Like `renderToString` from `react-dom/server`, but add a doctype declaration
 * to the output.
 */
export function renderWithDoctype(element: JSX.Element): string {
  const contents = renderToString(element);
  return `<!DOCTYPE html>${contents}`;
}
