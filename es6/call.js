var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
// Here the "this" word inside the function will refer to 'Jane Doe'
obj.greet.call({ name: 'Jane Doe' }, param1, param2);
// If there are parameters to passo to the function, they are passed using an array
obj.greet.apply({ name: 'Jane Doe' }, [param1, param2]);

