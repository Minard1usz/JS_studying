import React, { useState } from 'react';
import './App.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Поле "Ім\'я" обов\'язкове для заповнення';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Поле "Електронна пошта" обов\'язкове для заповнення';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Неправильний формат електронної пошти';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Поле "Телефон" обов\'язкове для заповнення';
      valid = false;
    } else if (!/^\d{12}$/.test(formData.phone)) {
      newErrors.phone = 'Телефон повинен містити 12 цифр';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    }
  };

  return (
    <div>
      {submittedData ? (
        <div>
          <h2>Ваші дані були відправлені:</h2>
          <p>Ім'я: {submittedData.name}</p>
          <p>Електронна пошта: {submittedData.email}</p>
          <p>Телефон: {submittedData.phone}</p>
        </div>
      ) : (
        <form className='formWrap' onSubmit={handleSubmit}>
        <div>
            <h2 className='formName'>Form</h2>
        </div>
          <div>
            <label>Ім'я:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='spanField'
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div>
            <label>Електронна пошта:</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='spanField'
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Телефон:</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='spanField'
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>
          <button className='sendBtn' type="submit">Відправити</button>
        </form>
      )}
    </div>
  );
};

export default MyForm;
