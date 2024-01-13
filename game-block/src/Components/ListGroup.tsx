const ListGroup = () => {
  let arr = ["New York", "India", "Landon", "USA", "Japan"];
  let items = arr.map((item) => <li key={item}>{item}</li>); // try to asses each item by map in item item send to li element

  arr = [];
  //   if (arr.length === 0) {
  //     return (
  //       <>
  //         <p>No item found.</p>
  //       </>
  //     );
  //   }
  const getResult = () => { //this is more helpfull to pass parameter and then take output 
    return arr.length
  }
  return (
      <>
      <h1>hello</h1>
      <ul className="list-group">
        {getResult()}
        {/* {arr.length === 0 ? <p>No item is found.</p> : items} */}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
};

export default ListGroup;
