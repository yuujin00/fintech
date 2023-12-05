var fs = require("fs");

console.log("first func");
let textresult ="입력전";
fs.readFile("./test.txt", "utf8", function (err, result) {
  if (err) {
    console.error(err);
    throw err;
  } else {
    textresult =result;
    console.error(
      "두번째 기능인데 파일을 읽어오느라 시간이... 조큼 ... 걸려요"
    );
    console.log(textresult);
    console.log("third func");
  }
});
