module.exports = async function runSelfGetAllTest() {
    const url = "https://team-project-store-products--jlchengca.replit.app/products"; 

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
            email: "chen0880@algonquinlive.com",
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
            email: "chen0880@algonquinlive.com",
            name: "Self GetAll Test",
            passed: false,
            url,
            details: error.message
        };
    }
};