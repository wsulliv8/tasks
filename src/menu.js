
export function createMenu() {
  const content = document.querySelector('#content');
  const menu = [
    {
      name : 'Chicken Gumbo',
      calories: '10,000',
      description: `Billy's signature dish. This dish
      takes approximately 10 hours to eat.`
    },
    {
      name : 'Chicken el Dente',
      calories: '500',
      description: `Billy's doesn't actually know what el
      dente means, but it sounds provocative. It is
      probably safe to eat!`
    },
    {
      name : 'Chicken with Rice',
      calories: '5',
      description: `It's chicken with rice. What more do
      you want?`
    }
  ]
  menu.forEach((item) => {
    const menuItem = document.createElement('div');
    const name = document.createElement('h2');
    name.innerText = item.name;
    const calories = document.createElement('h2');
    calories.innerText = item.calories;
    const description = document.createElement('blockquote');
    description.innerText = item.description;
    menuItem.appendChild(name);
    menuItem.appendChild(calories);
    menuItem.appendChild(description);
    content.appendChild(menuItem);
    console.log('meow');
  })
}