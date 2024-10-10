test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1); // Fails
  return fetchData().catch(error => expect(error).toMatch('error'));
});

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter");
            // reject("error")
}, 300); });
};