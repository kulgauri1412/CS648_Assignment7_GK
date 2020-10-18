function update(inventory) {
    'use strict';

    var sku = Number(prompt("Enter the product SKU number"));
    if (sku < 1) {
        alert("Enter valid SKU number");
    } else {
        var quantity = Number(prompt("Enter new quantity"));
        if (quantity < 0) {
            alert("Enter positive quantity");
        } else {
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i][0] === sku) {
                    inventory[i][2] = quantity;
                    console.log("Product " + sku + "quantity is now " + quantity);
                }
            }
        }
    }
}

function display(inventory) {
    'use strict';

    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i][0] + ' ' +
                    inventory[i][1] + ' (' +
                    parseInt(inventory[i][2]) + ') ' +
                    '$' + parseFloat(inventory[i][3])
                    );
    }
    console.log('');
}

function menu() {
    'use strict';
    console.log('Command details:');
    console.log('show - Show all products');
    console.log('update - Update an existing product inventory');
    console.log('exit - Exit the program');
    console.log('');
}

function mainSystem() {
    'use strict';

    var inventory, command;

    inventory = [
        [4824, 'Shirt',10, 15.99],
        [6343, 'Jeans', 22, 39.99],
        [3223, 'Socks', 36, 9.99],
        [2233, 'Hat', 12, 14.99],
        [9382, 'Jacket', 5, 49.99]
    ];

    menu();

    while (true) {
        command = window.prompt("Enter command: (show/update/exit)").toLowerCase();
        if (command === null) {
            break;
        }

        if (command === "show") {
            display(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === 'exit') {
            break;
        } else {
            window.alert("Please enter valid command (show/update/exit)");
        }
    }
    window.console.log("Program terminated");
}

mainSystem();