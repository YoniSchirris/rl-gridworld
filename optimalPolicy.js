console.log("Hello world");


let gridWorld = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];


const optimalPolicy = () => {

    let discountFactor = 0.9;

    for (let k = 0; k < 100; k++) {

        console.log(k);
        console.log(gridWorld.join("\n"));
        console.log("---------------");

        for (let i = 0; i < 5; i++) {
            // i iterates over rows
            let printString = "";
            for (let j = 0; j < 5; j++) {
                // j iterates over columns

                if (i === 0 && j === 1) {
                    // Position A
                    gridWorld[i][j] = 10 + discountFactor * gridWorld[4][1];

                } else if (i === 0 && j === 3) {
                    // Posiiton B
                    gridWorld[i][j] = 5 + discountFactor * gridWorld[2][3];

                } else {

                    if (i === 0 && j > 0 && j < 4) {
                        // top row, not corners
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j + 1], discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i + 1][j]);

                    } else if (i === 0 && j === 0) {
                        //top row, left corner
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j + 1], discountFactor * gridWorld[i + 1][j]);

                    } else if (i === 0 && j === 4) {
                        //top row, right corner
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i + 1][j]);

                    } else if (j === 0 && i > 0 && i < 4) {
                        // left column, not corners
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j + 1], discountFactor * gridWorld[i + 1][j], discountFactor * gridWorld[i - 1][j]);

                    } else if (j === 0 && i === 4) {
                        // left column, bottom corner
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j + 1], discountFactor * gridWorld[i - 1][j]);

                    } else if (j === 4 && i > 0 && i < 4) {
                        // right columns, not corners
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i + 1][j], discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i - 1][j]);

                    } else if (j === 4 && i === 4) {
                        // right column, bottom corner
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i - 1][j]);

                    } else if (i === 4 && j > 0 && j < 4) {
                        //bottom row, not corners
                        gridWorld[i][j] = Math.max(((-1 + discountFactor * gridWorld[i][j])), discountFactor * gridWorld[i - 1][j], discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i][j + 1]);

                    } else {
                        // anywhere in the middle
                        gridWorld[i][j] = Math.max(discountFactor * gridWorld[i + 1][j], discountFactor * gridWorld[i][j + 1], discountFactor * gridWorld[i][j - 1], discountFactor * gridWorld[i - 1][j]);

                    }
                }
            }
        }
    }
};

optimalPolicy();

