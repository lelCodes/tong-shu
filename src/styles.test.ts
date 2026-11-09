import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./App.css", import.meta.url), "utf8");

describe("column header tooltip", () => {
  it("waits 2 seconds before it appears", () => {
    const rule = css.match(/th\.coltip:hover::after\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(rule).toMatch(/animation:\s*coltip-in\s+0\.15s\s+2s\s+both/);
  });
});
