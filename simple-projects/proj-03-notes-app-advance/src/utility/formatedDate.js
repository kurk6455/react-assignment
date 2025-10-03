
export function formatedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    const paddedMinutes = minutes.toString().padStart(2, '0');

    const display = `${day} ${month}. ${hour12}:${paddedMinutes}${ampm}`;
    const iso = date.toISOString();

    return { iso, display }
}

