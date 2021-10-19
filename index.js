let { PythonShell } = require("python-shell");
//you can use error handling to see if there are any errors

let options = {
  mode: "text",
  //   pythonPath: 'path/to/python',
  //   pythonOptions: ['-u'], // get print results in real-time
  //   scriptPath: 'path/to/my/scripts',
  args: ["value1", "value2", "value3"],
};

const testFolder = "./";
const fs = require("fs");

fs.readdirSync(testFolder).forEach((file) => {
  PythonShell.run(
    "test.py " + file.substring(0, 3),
    { mode: "text" },
    function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log("results: %j", results);
    }
  );
});

//PythonShell.run('test.py', options, function (err, results) {
