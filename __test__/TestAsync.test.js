function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("wait 1sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com"
      };
      resolve(user);
    }, 1000);
  });
}

test("fetch a user", async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com"
  });
});
