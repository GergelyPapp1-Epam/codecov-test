import { getRandomNumber } from "./getRandomNumber";


it("returns a random number that's lower than 100 ", () => {
    const maxNum = 100;
    const randomNumber = getRandomNumber(maxNum);

    expect(randomNumber < maxNum).toBeTruthy()
})


it("returns a random number that's lower than 10 ", () => {
    const maxNum = 10;
    const randomNumber = getRandomNumber(maxNum);

    expect(randomNumber < maxNum).toBeTruthy()
})