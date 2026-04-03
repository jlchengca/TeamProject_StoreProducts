module.exports = async function runMember2GetAllTest() {
    const url = "https://cst8326-teamproject-api-mariama.onrender.com/products/getAll"; 

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
            name: "Member 2 GetAll Test",
            passed,
            url,
            status: response.status,
            details: passed
                ? `Returned ${data.length} product(s).`
                : "Expected HTTP 200 and a JSON array."
        };
    } catch (error) {
        return {
            name: "Member 2 GetAll Test",
            passed: false,
            url,
            details: error.message
        };
    }
};