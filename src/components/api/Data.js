const data = {
  add: async ({
    id, title, author, category,
  }) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3WJpcFKpBlztsuZ84MnO/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    });
  },

  remove: async (id) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3WJpcFKpBlztsuZ84MnO/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  allBooks: async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3WJpcFKpBlztsuZ84MnO/books');
    const data = await response.json();

    const list = Object.entries(data).map(([id, book]) => {
      const { title, author, category } = book[0];
      return {
        id, title, author, category,
      };
    })
      .sort((a, b) => a.title.localeCompare(b.title));

    return list;
  },
};

export default data;
