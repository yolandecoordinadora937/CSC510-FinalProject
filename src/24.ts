export async function fetchData(): Promise<any> {
    const response = await fetch('https://api.example.com/data');
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}
