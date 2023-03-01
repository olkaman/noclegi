import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Menu from './components/Menu/Menu';
import SearchField from './components/SearchField/SearchField';

function App() {
  const hotels = [
    {
      id: '1',
      name: 'Róze i fiołki',
      location: 'Warszawa',
      rating: 8.3,
      description: 'Lorem ipsum dolor',
      img: '',
    },
    {
      id: '2',
      name: 'Pod starym dębem',
      location: 'Opole',
      rating: 8.8,
      description: 'Lorem ipsum dolor sit amet i cos tam',
      img: '',
    },
    {
      id: '3',
      name: 'Pod papugami',
      location: 'Gniezno',
      rating: 9.9,
      description: 'Lorem ipsum dolor sit amet i cos tam',
      img: '',
    },
  ];

  const [hotelsView, setHotelsView] = useState(hotels);

  const searchHotel = (term) => {
    const newHotels = hotels.filter((hotel) => hotel.name.toLowerCase().includes(term.toLowerCase()));
    setHotelsView(newHotels);
  };

  return (
    <div className='App'>
      <Header>
        <SearchField searchHotel={searchHotel} />
      </Header>
      <Menu />
      <Hotels hotels={hotelsView} />
    </div>
  );
}

export default App;
