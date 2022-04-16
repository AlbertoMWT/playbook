const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: ["js", "c#"],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true,
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true,
            },
        },
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: ["js"],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false,
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false,
            },
        },
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: ["elixir"],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true,
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false,
            },
        },
    },
];

// 1, 2
explorers.forEach((explorer) => {
    // console.log(explorer.name)
    // console.log(explorer.stack[0])
});

// 3
const stack = [];
explorers.map((explorer) => {
    explorer.stack.map((e) => {
        if (!stack.includes(e)) {
            stack.push(e);
        }
    });
});
// console.log(stack)

// 4
const stackJs = explorers.filter((explorer) => explorer.stack.includes("js"));
// console.log(stackJs)

// 5
const city = explorers.find((explorer) => explorer.city === "CDMX");
// console.log(city)

// 6
const count = [];
explorers.map((explorer) => {
    count.push(explorer.exercises_completed);
});
const sum = count.reduce((a, b) => a + b, 0);
// console.log(sum)

// 7
const frontValidate = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
// console.log(validate)

// 8
const onValidate = explorers.every(explorer => explorer.missions.onboarding.isFinished === true)
console.log(onValidate)