var readFiles = require("./read-files-arg.js");

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test('returns true when the array of directories is appropiated', (done) => {

    console.log(readFiles.readFiles("."));
    Code.expect(readFiles.readFiles(".").length).to.equal(2);
    done();
});
