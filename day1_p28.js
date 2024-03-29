let que;

que = 36;

if (que <= 10) {
    console.log(que * 6);
}

else if (que <= 20) {
    console.log(6 * 10 + (que - 10) * 2);
}

else if (que <= 40) {
    console.log(6 * 10 + 2 * 10 + (que - 20) * 1);
}

else {
    console.log(100);
}