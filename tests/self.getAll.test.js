module.exports = async function runSelfGetAllTest() {
    const url = "http://localhost:3000/products"; // change this if your route is different

    try {
        const response = await fetch(url);

        let data;
        try {
            data = await response.json();
        } catch {
            data = null;
        }

        const passed = response.ok && Array.isArray(data);

        return {
            name: "Self GetAll Test",
            passed,
            url,
            status: response.status,
            details: passed
                ? `Returned ${data.length} product(s).`
                : "Expected HTTP 200 and a JSON array."
        };
    } catch (error) {
        return {
            name: "Self GetAll Test",
            passed: false,
            url,
            details: error.message
        };
    }
};