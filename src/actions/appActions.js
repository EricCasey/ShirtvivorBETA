
export const getData = (type, stateFunc, updateFunc) => {
  return fetch(`http://localhost:8080/api/${type}`)
  .then( result => {
    let data = result.json()

    data.then( newData => {
      stateFunc({ [type]: newData });
      updateFunc();
    });
  })
}