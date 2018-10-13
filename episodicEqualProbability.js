console.log("Hello world");


let gridWorld = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];


const episodicEqualProbabilityPolicy = () => {

    let discountFactor = 1;

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
                    gridWorld[i][j] = 10;

                } else if (i === 0 && j === 3) {
                    // Posiiton B
                    gridWorld[i][j] = 5;

                } else {

                    if (i === 0 && j > 0 && j < 4) {
                        // top row, not corners
                        gridWorld[i][j] = (0.25 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j + 1] + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i + 1][j];

                    } else if (i === 0 && j === 0) {
                        //top row, left corner
                        gridWorld[i][j] = (0.5 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j + 1] + 0.25 * discountFactor * gridWorld[i + 1][j];

                    } else if (i === 0 && j === 4) {
                        //top row, right corner
                        gridWorld[i][j] = (0.5 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i + 1][j];

                    } else if (j === 0 && i > 0 && i < 4) {
                        // left column, not corners
                        gridWorld[i][j] = (0.25 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j + 1] + 0.25 * discountFactor * gridWorld[i + 1][j] + 0.25 * discountFactor * gridWorld[i - 1][j];

                    } else if (j === 0 && i === 4) {
                        // left column, bottom corner
                        gridWorld[i][j] = (0.5 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j + 1] + 0.25 * discountFactor * gridWorld[i - 1][j];

                    } else if (j === 4 && i > 0 && i < 4) {
                        // right columns, not corners
                        gridWorld[i][j] = (0.25 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i + 1][j] + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i - 1][j];

                    } else if (j === 4 && i === 4) {
                        // right column, bottom corner
                        gridWorld[i][j] = (0.5 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i - 1][j];

                    } else if (i === 4 && j > 0 && j < 4) {
                        //bottom row, not corners
                        gridWorld[i][j] = (0.25 * (-1 + discountFactor * gridWorld[i][j]))  + 0.25 * discountFactor * gridWorld[i-1][j] + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i][j + 1];

                    } else {
                        // anywhere in the middle
                        gridWorld[i][j] = 0.25 * discountFactor * gridWorld[i + 1][j] + 0.25 * discountFactor * gridWorld[i][j + 1] + 0.25 * discountFactor * gridWorld[i][j - 1] + 0.25 * discountFactor * gridWorld[i - 1][j];

                    }
                }
                printString += gridWorld[i][j] + " ";
            }
            // console.log(printString);
        }
    }
};

episodicEqualProbabilityPolicy();
