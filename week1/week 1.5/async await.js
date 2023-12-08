function asyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hiii");
  });
  return p;
}

async function main() {
  const value = await asyncFunction();
  console.log(value);
}

main();
