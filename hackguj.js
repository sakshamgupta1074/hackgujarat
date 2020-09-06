let {PythonShell} = require('python-shell')
let pyshell = new PythonShell('start.py');
pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});