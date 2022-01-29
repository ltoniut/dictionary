export default async function Get(
    url: string,
    headers:Record<string, unknown> = {}
): Promise<any>{
    try {
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
        });
        return response.json();
    } catch (e: unknown) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase())
        } else if (e instanceof Error) {
            throw e
        }
    }
}
