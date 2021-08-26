const createPokemon = require("../create.js");

const db = require("../../db/models/index");

jest.setTimeout(3000);

const pokemon1 = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHp: 35,
  category: "Mouse Pokemon",
};

describe("create", () => {
  beforeAll(async () => {
    await db.sequelize.sync();
  });

  afterAll(async () => {
    await db.sequelize.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it.skip("should create a pokemon", async () => {
    const created = await createPokemon(pokemon1);

    expect(created.id).not.toBeNull();
    // expect(created).toEqual(pokemon1); // false
    // expect(created).toContainEqual(pokemon1); // false
    expect(created).toMatchObject(pokemon1);
  });

  it.skip("should not create pokemon without name", async () => {
    // run
    // assert

    await expect(() =>
      createPokemon({ ...pokemon1, name: null })
    ).rejects.toThrow();
  });

  it.skip("should not create pokemon with empty name", async () => {
    // run
    // assertion

    await expect(() =>
      createPokemon({ ...pokemon1, name: "" })
    ).rejects.toThrow();
  });

  it.skip("should not create pokemon with duplicated name", async () => {
    // set up
    await createPokemon(pokemon1);

    // run
    const created = await createPokemon(pokemon1);

    // assertion
  });
});
