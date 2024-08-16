import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const url = 'http://localhost:3004/search'

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log('Data fetched:', response.data);
      setNfts(response.data);
      setFilteredNfts(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = nfts.filter(nft =>
        nft.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNfts(filtered);
    } else {
      setFilteredNfts(nfts);
    }
  }, [searchQuery, nfts]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <div className="search">
        <input
          type="search"
          className='searchInp'
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search NFTs..."
        />
      </div>
      <div className="market-Nfts">
        {filteredNfts.length > 0 ? (
          filteredNfts.map(({ id, title, img, avatar, username, price, eid }) => (
            <div className="market-nft-grp" key={id}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <div className="avatar-username">
                <img className='avatar-img' src={avatar} alt={username} />
                <p>{username}</p>
              </div>
              <div className="price-eid">
                <div className="market-price">
                  <p className='pr'>Prices</p>
                  <p>{price}</p>
                </div>
                <div className="market-eid">
                  <p className='pr'>Highest Eid</p>
                  <p>{eid}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No NFTs found.</p>
        )}
      </div>
    </div>
  )
}

export default App
