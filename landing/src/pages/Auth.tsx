import React from 'react';

import Header from '../partials/fixed/Header';
import AuthContent from '../partials/content/AuthContent';
import Features from '../partials/fixed/Features';
import Footer from '../partials/fixed/Footer';

function Auth() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <AuthContent />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Auth;