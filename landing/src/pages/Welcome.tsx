import React from 'react';

import Header from '../partials/fixed/Header';
import Features from '../partials/fixed/Features';
import Footer from '../partials/fixed/Footer';
import WelcomeContent from "../partials/content/WelcomeContent";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <WelcomeContent />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;