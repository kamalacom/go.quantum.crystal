import React from 'react';
import Header from '../partials/fixed/Header';
import Features from '../partials/fixed/Features';
import Footer from '../partials/fixed/Footer';
import EncoderContent from "../partials/content/EncoderContent";

function Encoder() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <EncoderContent />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Encoder;