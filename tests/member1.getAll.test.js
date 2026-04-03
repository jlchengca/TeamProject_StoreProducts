module.exports = async function runMember1GetAllTest() {
    const url =  

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
            name: "Member 1 GetAll Test",
            passed,
            url,
            status: response.status,
            details: passed
                ? `Returned ${data.length} product(s).`
                : "Expected HTTP 200 and a JSON array."
        };
    } catch (error) {
        return {
            name: "Member 1 GetAll Test",
            passed: false,
            url,
            details: error.message
        };
    }
};