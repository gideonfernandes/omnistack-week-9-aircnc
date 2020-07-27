import React, { useState, useMemo } from 'react';
import api from '../../../services/api';

import './styles.css';
import camera from '../../../assets/camera.svg';

const NewSpot = ({ history }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const previewSpot = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async event => {
    event.preventDefault();
    
    if (company !== '' && techs !== '') {
      const data = new FormData();
      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);
      data.append('price', price);

      const user_id = localStorage.getItem('user_id');

      await api.post('/spots', data, {
        headers: { user_id }
      });

      history.push('/dashboard');
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${previewSpot})` }}
        className={thumbnail ? 'has-preview' : ''}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Selecionar imagem da empresa"/>
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        type="text"
        name="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
        required
      />

      <label htmlFor="techs">TECNOLOGIAS *
        <span>(separadas por vírgula)</span>
      </label>
      <input
        type="text"
        name="techs"
        placeholder="Quais tecnologias utilizam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
        required
      />

      <label htmlFor="price">VALOR DA DIÁRIA
        <span>(em branco para GRATUITO)</span>
      </label>
      <input
        type="text"
        name="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button className="btn">Cadastrar</button>
    </form>
  );
};

export default NewSpot;
