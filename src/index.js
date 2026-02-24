import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';
import App from './routes/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando a la App'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>
);
