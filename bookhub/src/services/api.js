export const fetchBooks = async () => {
    const response = await fetch('/api/b/YEP3');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}