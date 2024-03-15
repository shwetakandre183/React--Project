const parent = React.createElement("div", { id: "parent", xyz: "abc" },[
 React.createElement("div", { id: "child1", xyz: "abc" },
  [React.createElement("h1", { }, "hi i am heading one")
  ,React.createElement("h2", {}, "hi i am heading two")])


 ,React.createElement("div", { id: "child2", xyz: "abc" }, "hello React1"),
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)