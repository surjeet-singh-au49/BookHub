export const fetchBooks = async () => {
    const response = await fetch('/api/b/WPN0');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}