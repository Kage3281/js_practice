for (let i = 1; i <= 9; i++) {

    for (let j = 1; j <= 9; j++) {

        if (i === j) {
            console.log(i + 'X' + j + '=' + i * j + " 棒");
        }
        else {
            console.log(i + 'X' + j + '=' + i * j);
        }

    }

}