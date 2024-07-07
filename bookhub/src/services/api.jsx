export const fetchBooks = async () => {
    const response = await fetch('/api/b/N7W4');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}