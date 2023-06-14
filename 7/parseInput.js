export const parseInput = (input) => {
  const lines = input.toString().split("\n");
  const root = { name: "/", type: "dir", children: [] };
  let cwd = root;
  for (const line of lines) {
    if (line[0] === "$") {
      const [command, arg] = line.slice(2).split(" ");
      if (command === "cd") {
        if (arg === "/") {
          cwd = root;
        } else if (arg === "..") {
          cwd = cwd ? cwd.parent : cwd;
        } else {
          const existingChild = cwd.children.find(
            (child) => child.name === arg
          );
          if (existingChild) {
            cwd = existingChild;
          } else {
            const newChild = {
              parent: cwd,
              name: arg,
              type: "dir",
              children: []
            };
            cwd.children.push(newChild);
            cwd = newChild;
          }
        }
      }
    } else if (line) {
      const [sizeOrType, name] = line.split(" ");
      const existingChild = cwd.children.find((child) => child.name === name);
      if (!existingChild) {
        cwd.children.push({
          parent: cwd,
          name,
          type: sizeOrType === "dir" ? "dir" : "file",
          size: sizeOrType === "dir" ? -1 : Number(sizeOrType),
          children: []
        });
      }
    }
  }
  const directorySizes = [];
  const getSize = (node) =>
    node.children?.length > 0
      ? node.children.reduce((size, child) => size + getSize(child), 0)
      : node.size;
  const setSize = (node) => {
    node.children.forEach(setSize);
    node.size = getSize(node);
    if (node.type === "dir") {
      directorySizes.push(node.size);
    }
  };
  setSize(root);
  return { root, directorySizes };
};
