//Todo List Commands
//"new" Add a Todo
//"list" List all Todo
//"delete" Remove Specific Todo
//"quit" Quit app

//We'll strt by making an array
let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Buy Maths Book'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        // console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        // console.log('*****************');
    } else if (input === "new") {
        const newTodo = prompt('Type ur Todo...');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt('Enter the index number...'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`${deleted[index]} removed from the list.`);
        } else {
            console.log('unknown index!');
            const unknown = prompt('Unknown Index! Type again!');
        }
    }

    input = prompt('What would you like to do?')
}
console.log('Ok, quit the app!')

///////
//////
/////practice ign
const weekDay = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
};


function returnDay(day) {
    if (Object.key < 1 || Object.key > 7) {
        return null;
    } else {
        return returnDay;
    }
}

