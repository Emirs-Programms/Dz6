const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  users.sort((a, b) => a.age - b.age);
  
  console.log(users);
  