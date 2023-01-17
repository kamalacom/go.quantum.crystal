import React from 'react';
import Illustration from '../../images/hero-illustration.svg';
import {useNavigate} from "react-router-dom";

function AuthContent() {
    const navigate = useNavigate();

    function goToEncoder() {
        navigate('/encoder')
    }

    return (
        <section className="relative mb-8">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
                <img src={Illustration} className="max-w-none" width="1440" height="1265" alt="AuthContent Illustration" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 md:pt-40">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="h1 font-hkgrotesk mb-16" data-aos="fade-up">
                            Centrex VozTelecom CRM Integration
                        </h1>
                        <p
                            onClick={goToEncoder}
                            className="text-base text-slate-200 cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-2 mb-16" data-aos="fade-up" data-aos-delay="100">
                            encoder
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthContent;
