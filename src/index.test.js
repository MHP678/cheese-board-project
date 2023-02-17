const { User } = require("./User.js");
const { Board } = require("./Board.js");
const { Cheese } = require("./Cheese.js");
const sequelize = require("./db");


describe("Database tests", () => {

    // We use the beforeAll hook to ensure that the database is synced before running the tests.
    beforeAll(async () => {
     await sequelize.sync({ force: true });
    });
  
    it("should create a user", async () => {
      const user = await User.create({
        name: "MHP",
        email: "MHP@gmail.com",
      });
      expect(user.name).toBe("MHP");
      expect(user.email).toBe("MHP@gmail.com");
    });
  
    it("should create a board", async () => {
      const board = await Board.create({
        type: "kkkk",
        description: "kkk",
        rating: 10,
      });
      expect(board.type).toBe("kkkk");
      expect(board.description).toBe("kkk");
      expect(board.rating).toBe(10);
    });

    it("should associate a user with boards", async () => {
        const user = await User.create({
          name: "MHP",
          email: "MHP@gmail.com",
        });
        const board1 = await Board.create({
          type: "kkkk",
          description: "kkk",
          rating: 10,
        });
        const board2 = await Board.create({
          type: "pppp",
          description: "ppp",
          rating: 5,
        });
        await user.addBoard(board1);
        await user.addBoard(board2);
        const boards = await user.getBoards();
        expect(boards.length).toBe(2);
      });
  
    it("should create a cheese", async () => {
      const cheese = await Cheese.create({
        title: "Rllll",
        description: "ppppp.",
      });
      expect(cheese.title).toBe("Rllll");
      expect(cheese.description).toBe("ppppp.");
    });
  })
