module.exports = async function runMember1GetAllTest() {
    const url = "https://team-project-e-commerce--tiagophilippefe.replit.app/store/69becb00e3e49ae440f51722/";

    try {
        const response = await fetch(url);

        let data;
        try {
            data = await response.json();
        } catch {
            data = null;
        }

        const products = Array.isArray(data) ? data : data?.products;
        const passed = response.ok && Array.isArray(products);

        return {
            email: "ferr0312@algonquinlive.com",
            name: "Member 1 GetAll Test",
            passed,
            url,
            status: response.status,
            details: passed
                ? `Returned ${products.length} product(s).`
                : "Expected HTTP 200 and a JSON array or an object with a products array."
        };
    } catch (error) {
        return {
            email: "ferr0312@algonquinlive.com",
            name: "Member 1 GetAll Test",
            passed: false,
            url,
            details: error.message
        };
    }
};