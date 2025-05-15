import React from 'react';
import ListItem from './ListItem';

export function ShoppingList(props) {
  const items = [
    {
      item: 'bananas',
      max: 10,
    },
    {
      item: 'apples',
      max: 5,
    },
    {
      item: 'oranges',
    },
  ];

  function onFormSubmit(e) {
    e.preventDefault(); // this is to avoid the form to be submitted (and the page to reload)
    const formData = new FormData(e.target);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    alert(`You purchased: ${JSON.stringify(object)}`);
  }

  return (
    <div className='shopping-list'>
        <h1>Shopping List</h1>
        <form onSubmit={onFormSubmit}>
            {items.map((item) => 
                <ListItem
                key={item.item}
                label={item.item}
                maxValue={item.max}
              />
            )}
            <button>Checkout</button>
        </form>
    </div>
  );
}
