
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
// @ts-ignore
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
    <Toaster 
  position="top-right"
  toastOptions={{
    // Customize the look
    style: {
      background: '#0f172a',    // Matches your slate-900 background
      color: '#f8fafc',         // Slate-50 text
      border: '1px solid #1e293b', // Slate-800 border
      borderRadius: '1rem',     // Matches your rounded-3xl theme
    },
    // Customize the icons
    error: {
      iconTheme: {
        primary: '#ef4444',     // Bright red for error
        secondary: '#0f172a',
      },
    },
  }}
/>
    </Provider>

)
