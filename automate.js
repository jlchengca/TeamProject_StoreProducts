const selfTest = require("./tests/self.getAll.test");
const member1Test = require("./tests/member1.getAll.test");
const member2Test = require("./tests/member2.getAll.test");

async function runTestsSequentially() {
    const tests = [selfTest, member1Test, member2Test];
    let failed = false;

    for (const runTest of tests) {
        try {
            const result = await runTest();

            console.log(`Email: ${result.email}`);
            console.log(`Test: ${result.name}`);
            console.log(`Result: ${result.passed ? "PASS" : "FAIL"}`);

            if (result.url) {
                console.log(`URL: ${result.url}`);
            }

            if (result.status !== undefined) {
                console.log(`Status: ${result.status}`);
            }

            if (result.details) {
                console.log(`Details: ${result.details}`);
            }

            console.log("-----------------------------------");

            if (!result.passed) {
                failed = true;
            }
        } catch (error) {
            failed = true;
            console.log(`Email: Unknown`);
            console.log(`Test: Unknown Test`);
            console.log(`Result: FAIL`);
            console.log(`Details: ${error.message}`);
            console.log("-----------------------------------");
        }
    }

    if (failed) {
        process.exitCode = 1;
    } else {
        console.log("All tests finished.");
    }
}

runTestsSequentially();