const { User } = require("./User.js");
const { Board } = require("./Board.js");
const { Cheese } = require("./Cheese.js");

const sequelize = require("./db");

User.hasMany(Board); 

async function main () {
    await sequelize.sync({ force: true });

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

    console.log(boards.length); // should output 2

    await Cheese.create({
        title: "Rllll",
        description: "ppppp.",
    });
}; 

main()