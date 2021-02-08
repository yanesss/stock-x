const tasks = require('./configs/tasks.json');
const { findProduct } = require('./requests/product');

for (let task of tasks) {
    findProduct(task);
}
