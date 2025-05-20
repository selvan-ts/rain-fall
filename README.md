# 🌧️ Rainfall Prediction React App

This is a React-based frontend for predicting rainfall using machine learning techniques. It connects to a Flask backend that performs the prediction using models like Decision Tree and XGBoost.

---

## 🚀 Features

- 🌤️ Input: Precipitation, Max/Min Temperature, Wind
- 🤖 Models: Decision Tree & XGBoost
- 📊 Displays model accuracy and final rainfall prediction
- 🎨 Styled with custom backgrounds and responsive design
- 🔄 Navigation via React Router

---

## 📁 Project Structure

```
rainfall-react-app/
├── public/
│   ├── bg.jpg
│   └── output.jpg
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── Form.js
│   │   └── Result.js
│   ├── App.css
│   └── components/
│       ├── Form.css
│       └── Result.css
├── package.json
└── README.md
```

---

## 📦 Dependencies

Install all required dependencies with:

```bash
npm install
```

Key packages:
- `react-router-dom`
- `axios`

Install them manually if needed:

```bash
npm install react-router-dom axios
```

---

## 🧠 Backend Integration (Flask)

Make sure your Flask backend is running on:

```
http://127.0.0.1:5000/rainfall
```

And it supports JSON POST requests with the following fields:

```json
{
  "Preci": "value",
  "max": "value",
  "min": "value",
  "wind": "value"
}
```

The response must return:

```json
{
  "accuracy_1": "95.2",
  "accuracy_2": "97.6",
  "final": "Rain Expected",
  "v_h_r_1": "Very High Rainfall",
  "h_r_1": "High Rainfall",
  "s_s_1": "Some Shower",
  "m_s_1": "Moderate Shower"
}
```

---

## 🌐 Running the Python file

```bash
python app.py
```

Open [http://localhost:5000] in your browser.

---

## 🌐 Running the React App

```bash
npm start
```

Open [http://192.168.241.222:3000/] in your browser.

---

## 🖼️ Assets

Place your background images in the `public/` folder:
- `bg.jpg` – used in the input form page
- `output.jpg` – used in the output result page

---

## 🛠️ Future Improvements

- Add loading animation while waiting for prediction
- Add charts for visualizing rainfall trend
- Add option to download results as PDF
- Deploy to Vercel + Flask on Render

---

## 👨‍💻 Author

Built with 💻 using React and Python Flask.  
For deployment or contribution help, open an issue or contact me.

---
