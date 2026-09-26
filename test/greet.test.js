import assert from "node:assert/strict";
import { test } from "node:test";

import { farewell, greet } from "../lib/greet.js";

test("greet says hello by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("farewell says goodbye by name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});
