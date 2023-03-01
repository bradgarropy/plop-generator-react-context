import nodePlop from "node-plop"

import generator from "../src"

test("loads generator", async () => {
    const plop = await nodePlop("tests/utils/plopfile.ts")
    expect(generator(plop)).toBeUndefined()
})
