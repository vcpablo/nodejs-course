var buffer = new ArrayBuffer(8); //8 bytes = 64 bits
var view = new Int32Array(buffer); //this view can only stores two number (32bits + 32bits)

view[0] = 5;
view[1] = 15;
view[2] = 10;

console.log(view)
