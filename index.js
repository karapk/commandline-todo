import prompts from 'prompts';

var todoList = [];

const main = async () => {
    const todoMenu = async() => {
        return await prompts ({
            type: 'select',
            name: 'value',
            message:'What action to perform?',
            choices: [
                {title: "Show todo list", value: "S"},
                {title: "Add todo list", value: "A"},
                {title: "Show todo list", value: "D"},
                {title: "Quit todo list", value: "Q"}

            ],
        })
    }    

    const addTodo = async() => {
        return await prompts ({
            type: 'text',
            name: 'value',
            message: 'What is your new todo item?',
        })

    };
    // var message = await nextTodo();
    // console.log(message);
  
    const showTodo = () => {
        console.log("========================");
            todoList.forEach( (x) => console.log(x.value)) 
        console.log("========================");
        
    };

    var option = {};
    do {
        option = await todoMenu();
        switch(option.value) {
            case 'S' :
                showTodo();
                break;
            case 'A':
                todoList.push(await addTodo());
                break;
        }

    } while(option.value != 'Q');
};

main().catch(console.error);
