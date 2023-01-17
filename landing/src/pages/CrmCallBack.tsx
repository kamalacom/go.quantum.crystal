import React from 'react';

import Header from '../partials/fixed/Header';
import Features from '../partials/fixed/Features';
import Footer from '../partials/fixed/Footer';
import Illustration from "../images/hero-illustration.svg";

function Auth() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
          <section className="relative mb-8">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
                  <img src={Illustration} className="max-w-none" width="1440" height="1265" alt="AuthContent Illustration" />
              </div>
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="pt-32 md:pt-40">
                      <div className="max-w-3xl mx-auto text-center">
                          <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
                              Centrex VozTelecom CRM Integration
                          </h1>
                          <p className="text-4xl text-indigo-500 mt-10 mb-16" data-aos="fade-up" data-aos-delay="100">
                              ALL GOOD. Go user Bitrix now
                          </p>
                      </div>
                  </div>
              </div>
          </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Auth;