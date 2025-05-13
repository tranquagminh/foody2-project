export function decodeHTMLEntities(text: string): string {
    if (!text || typeof window === 'undefined') return text || '';

    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
}