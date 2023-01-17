import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../../images/hero-illustration.svg';

function AuthContent() {
  return (
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
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Click on "Authorize" to configure the integration of your Centrex PBX extension with CRM. A new tab will open at CRM site. Follow the instructions there and when you are done come back and click on "Authorized".
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos=""
              data-aos-delay=""
            >
              <div>
                <Link className="btn text-lg text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" to="/crmCallBack">
                  Authorize{' '}
                  <span className="tracking-normal ml-2 text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthContent;
