import React, { useState } from 'react';

import Illustration from '../../images/features-illustration-02.svg';

function Features() {

  return (
    <section className="relative border-t border-slate-800">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="1440" height="453" alt="Features 02 Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="bg-slate-800 bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                <div>
                <h3 className="h3 font-hkgrotesk mb-2">VozTelecom</h3>
                <div className="text-lg text-slate-500">
                    VozTelecom is a communications operator specialized in SMEs and leader in cloud communications in Spain. We are trusted by thousands of companies from all sectors and we are present throughout the national territory. We have more than 19 years of experience and since April 2020, VozTelecom is part of the British Gamma Communications.
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
