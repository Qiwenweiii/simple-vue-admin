import Mock from "mockjs";

Mock.mock("/user", {
  name: "@name",
  email: "@email",
  "age|1-10": 5,
});

Mock.mock("/menu", {
  id: "@increment",
  name: "menu",
  "order|10-20": 12,
});
