import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import SearchField from './components/SearchField/SearchField';
import ThemeButton from './components/ThemeButton/ThemeButton';

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
  const [theme, setTheme] = useState('primary');

  const searchHotel = (term) => {
    const newHotels = hotels.filter((hotel) => hotel.name.toLowerCase().includes(term.toLowerCase()));
    setHotelsView(newHotels);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'primary' ? 'danger' : 'primary';
    setTheme(newTheme);
  };

  return (
    <div className='App'>
      <Layout
        header={
          <Header>
            <SearchField searchHotel={searchHotel} theme={theme} />
            <ThemeButton onChangeTheme={onChangeTheme} theme={theme} />
          </Header>
        }
        menu={<Menu theme={theme} />}
        content={<Hotels hotels={hotelsView} theme={theme} />}
        footer={<Footer />}
      />
    </div>
  );
}

export default App;
