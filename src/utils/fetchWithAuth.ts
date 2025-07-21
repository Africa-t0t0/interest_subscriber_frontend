export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (!token) {
        return null;
    }

    const headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        credentials: "include",
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = '/login';
        return null;
    }

    return response;
}
