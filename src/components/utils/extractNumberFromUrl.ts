export function extractNumberFromUrl(url: string): number | null {
    const match = url.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : null;
}