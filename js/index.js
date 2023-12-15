function result () {

    const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    let sumOfPositives = 0;
    let countOfPositives = 0;
    let maxElement = numbers[0];
    let maxElementIndex = 0;
    let countOfNegatives = 0;
    let countOfOddPositives = 0;
    let countOfEvenPositives = 0;
    let sumOfEvenPositives = 0;
    let sumOfOddPositives = 0;
    let productOfPositives = 1;

    for (let i = 0; i < numbers.length; i++) {
        // Сума та кількість позитивних елементів
        if (numbers[i] > 0) {
            sumOfPositives += numbers[i];
            countOfPositives++;

            // Сума парних та не парних позитивних елементів
            if (numbers[i] % 2 === 0) {
                sumOfEvenPositives += numbers[i];
                countOfEvenPositives++;
            } else {
                sumOfOddPositives += numbers[i];
                countOfOddPositives++;
            }

            // Розрахунок добутку позитивних елементів
            productOfPositives *= numbers[i];
        }

        // Пошук максимального елемента та його індексу
        if (numbers[i] > maxElement) {
            maxElement = numbers[i];
            maxElementIndex = i;
        }

        // Розрахунок кількості негативних елементів
        if (numbers[i] < 0) {
            countOfNegatives++;
        }
    }

    const message = `1.1.Сума позитивних елементів: ${sumOfPositives}
    1.2.Кількість позитивних елементів: ${countOfPositives}
    2.Максимальний елемент та його порядковий номер: ${maxElement} (індекс ${maxElementIndex})
    3.Кількість негативних елементів: ${countOfNegatives}
    4.Кількість непарних позитивних елементів: ${countOfOddPositives}
    5.Кількість парних позитивних елементів: ${countOfEvenPositives}
    6.Сума парних позитивних елементів: ${sumOfEvenPositives}
    7.Сума непарних позитивних елементів: ${sumOfOddPositives}
    8.Добуток позитивних елементів: ${productOfPositives}`;

    alert(message);
}
