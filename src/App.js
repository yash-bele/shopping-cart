import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState({ name: '', price: '' });
  const [data, setData] = useState([]);

  const handleChange = (prop) => (e) => {
    setText({ ...text, [prop]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, text]);
    setText({ name: '', price: '' });
  };

  return (
    <div className='App'>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              type='text'
              placeholder='Item Name'
              value={text.name}
              onChange={handleChange('name')}
            />
          </div>
          <div>
            <input
              required
              type='number'
              placeholder='Item Price'
              value={text.price}
              onChange={handleChange('price')}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
        <table>
          <tbody>
            <tr>
              <th>Item No.</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
            {data.map((i, j) => {
              const { name, price } = i;
              return (
                <tr key={j}>
                  <td>{j + 1}</td>
                  <td>{name}</td>
                  <td>${price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                Total Price
                <span>${data.reduce((i, j) => i + j.price * 1, 0)}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </div>
  );
}

export default App;
