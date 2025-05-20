import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({ Preci: '', max: '', min: '', wind: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/rainfall', formData);
            navigate('/result', { state: response.data });
        } catch (error) {
            alert('Error connecting to Flask backend');
        }
    };

    // background style using public folder image
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px'
    };

    return (
        <div style={backgroundStyle}>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="all">
                    <div className="hed">
                        <h2><b>A POINT PRECIPITATION PROGNOSIS USING MACHINE LEARNING TECHNIQUES</b></h2>
                    </div>
                    <div className="in">
                        <label>Enter Precipitation:</label>
                        <input
                            type="text"
                            name="Preci"
                            value={formData.Preci}
                            onChange={handleChange}
                            placeholder="Enter Precipitation"
                        /><br />

                        <label>Enter Temp_Max:</label>
                        <input
                            type="text"
                            name="max"
                            value={formData.max}
                            onChange={handleChange}
                            placeholder="Enter Temp_Max"
                        /><br />

                        <label>Enter Temp_Min:</label>
                        <input
                            type="text"
                            name="min"
                            value={formData.min}
                            onChange={handleChange}
                            placeholder="Enter Temp_Min"
                        /><br />

                        <label>Enter Wind:</label>
                        <input
                            type="text"
                            name="wind"
                            value={formData.wind}
                            onChange={handleChange}
                            placeholder="Enter Wind"
                        /><br />

                        <div className="button">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
