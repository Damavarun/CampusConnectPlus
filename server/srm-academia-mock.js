// This is a local mock implementation of the private srm-academia-api package. 
// It replicates the TypeScript signatures provided by the user so we can develop the backend.
// Replace this with the actual package once access is provided.

export const verifyUser = async (username) => {
    // Simulating network request delay
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
        if (!username) {
            return {
                status_code: 400,
                message: "Username is required",
                error: "Bad Request",
                errorReason: "Missing Username"
            };
        }

        // Mock success scenario
        return {
            status_code: 200,
            message: "User verified successfully",
            data: {
                lookup: {
                    identifier: `ID-${username}`,
                    digest: "mock-digest-token-12345"
                }
            }
        };
    } catch (e) {
        return {
            status_code: 500,
            message: "Internal Server Error",
            error: true,
            errorReason: e.message
        };
    }
};

export const verifyPassword = async ({ digest, identifier, password }) => {
    // Simulating network request delay
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
        if (!digest || !identifier || !password) {
            return {
                status_code: 400,
                message: "Digest, identifier, and password are required",
                error: true,
                errorReason: "Missing Credentials",
                isAuthenticated: false
            };
        }

        // Mock success scenario (accept any password for now)
        return {
            status_code: 200,
            message: "Authentication successful",
            isAuthenticated: true,
            data: {
                cookies: "mock-session-cookie=123",
                statusCode: 200,
                message: "Success",
                captcha: null
            }
        };
    } catch (e) {
         return {
            status_code: 500,
            message: "Internal Server Error",
            error: true,
            errorReason: e.message,
            isAuthenticated: false
        };
    }
};

export const getUserInfo = async () => {
    // Simulating fetching profile data from the SRM portal
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
       data: {
           name: "Varun Datta", // Defaulting to the user's name for realism
           registerNumber: "AP20110010000",
           program: "B.Tech Computer Science and Engineering",
           batch: "2020-2024",
           section: "A1",
           classroom: "TP-401"
       }
    };
};
