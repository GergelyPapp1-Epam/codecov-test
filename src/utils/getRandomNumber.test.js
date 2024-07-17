import { getRandomNumber } from "./getRandomNumber";


it("returns a random number that's lower than max number ", () => {
    const maxNum = 100;
    const randomNumber = getRandomNumber(maxNum);

    expect(randomNumber < maxNum).toBeTruthy()
})