import React, {useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import Illustration from '../../images/hero-illustration.svg';
import Tooltip from "../../utils/Tooltip";

import useRunOnce from "../../utils/useRunOnce";
import axios from "axios";

function EncoderContent() {

  const DOMAIN = "http://localhost:8082/";

  const PBX_ATTR = "pbxName";
  const EXT_ATTR = "extension";
  const KEY_ATTR = "key";

  const [isCopied, setIsCopied] = useState(false);
  const [pbxName, setPbxName] = useState<string | null>("");
  const [extension, setExtension] = useState<string | null>("");
  const [key, setKey] = useState<string | null>("");
  const [url, setUrl] = useState<string | null>("");
  let [searchParams, setSearchParams] = useSearchParams();

  useRunOnce({
    fn: () => {
      handleSubmit()
    }
  });

  const handleSubmit = () => {
    let _pbxName = getSearchParam(PBX_ATTR, "");
    let _extension = getSearchParam(EXT_ATTR, "");
    let _key = getSearchParam(KEY_ATTR, "");
    setPbxName(_pbxName);
    setExtension(_extension);
    setKey(_key);
    updateSearchParams(_pbxName, _extension, _key);
  }

  const getSearchParam = (attr:string, defaultValue:string)  => {
    return searchParams.get(attr) ? encodeURIComponent(searchParams.get(attr)!) : defaultValue;
  }

  const setSearchParam = (attr:string, value:string)  => {
    searchParams.set(attr, decodeURIComponent(value));
  }

  const updateSearchParams = (pbxName:string|null, extension:string|null, key:string|null) => {
    if (pbxName && extension && key) {
      setSearchParam(PBX_ATTR, pbxName);
      setSearchParam(KEY_ATTR, key);
      setSearchParam(EXT_ATTR, extension);
      setSearchParams(searchParams.toString());
      calculateUrl(pbxName, extension, key);
    }
    else setUrl("");
  }

  const calculateUrl = (pbxName:string, extension:string, key:string) => {

    const env = "vtcrm_jm";
    const apiEncoder = `${DOMAIN}/${env}/api.v1/activation/encoder.jsp?pbxName=${pbxName}&extension=${extension}&key=${key}`;
    axios.get(apiEncoder)
        .then(response => {
          const _url = `${DOMAIN}${response.data.toString().trim()}`;
          setUrl(_url)
        })
        .catch(error => {
          setUrl("")
        });
  }

  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(url as string);
    } else {
      return document.execCommand('copy', true, url as string);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard()
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handleUrlClick = () => {
    if (url) window.open(url, "_blank");
  }

  const onChangePbxname = (e: { currentTarget: { value: any; }; }) => {
    setPbxName(e.currentTarget.value);
    updateSearchParams(e.currentTarget.value, extension, key);
  }

  const onChangeExtension = (e: { currentTarget: { value: any; }; }) => {
    setExtension(e.currentTarget.value);
    updateSearchParams(pbxName, e.currentTarget.value, key);
  }

  const onChangeKey = (e: { currentTarget: { value: any; }; }) => {
    setKey(e.currentTarget.value);
    updateSearchParams(pbxName, extension, e.currentTarget.value);
  }

  return (
      <section className="relative mb-8">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <img src={Illustration} className="max-w-none" width="1440" height="1265" alt="AuthContent Illustration" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="h1 font-hkgrotesk" data-aos="fade-up">
                Encoder
              </h1>
              <div className="flex flex-row justify-center mt-10">
                <p className="text-xl my-auto text-slate-500" data-aos="fade-up" data-aos-delay="100">
                  Pbxname:
                </p>
                <input
                    className="ml-4 w-48 my-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    onChange={onChangePbxname}
                    value={pbxName!}
                />
              </div>
              <div className="flex flex-row justify-center mt-6">
                <p className="text-xl my-auto text-slate-500" data-aos="fade-up" data-aos-delay="100">
                  Extension:
                </p>
                <input
                    className="ml-4 w-48 my-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    onChange={onChangeExtension}
                    value={extension!}
                />
              </div>
              <div className="flex flex-row justify-center mt-6">
                <p className="text-xl my-auto text-slate-500" data-aos="fade-up" data-aos-delay="100">
                  Key:
                </p>
                <input
                    className="ml-4 w-48 my-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    onChange={onChangeKey}
                    value={key!}
                />
              </div>
              <p className="text-xl text-slate-500 mt-6" data-aos="fade-up" data-aos-delay="100">
                Activation URL:
              </p>
              <p
                  onClick={handleUrlClick}
                  className="text-base text-slate-200 cursor-pointer hover:text-indigo-600 break-words hover:underline hover:underline-offset-2 mt-6 mb-10"
                  data-aos="fade-up" data-aos-delay="100">
                {url}
              </p>
              <div className={"flex flex-row justify-center mb-16"}>
                <div
                    className="my-auto h-fit w-fit items-center text-indigo-500 hover:text-slate-300 cursor-pointer transition duration-150 ease-in-out mr-4"
                    onClick={handleCopyClick}
                    aria-label="Copy">
                    <Tooltip
                      className={""}
                      position={"bottom"}
                      children={<span className={"w-fit"}>{isCopied ? 'Copied!' : 'Copy Activation URL'}</span>}
                      parent={
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-copy">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      }
                    />
                </div>
                <Tooltip
                    className={""}
                    position={"bottom"}
                    children={<span>{'Go!'}</span>}
                    parent={
                        <p
                            onClick={handleUrlClick}
                            className="font-normal inline-flex items-center justify-center border border-transparent rounded leading-snug transition p-2 duration-150 ease-in-out text-lg text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                          <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ml-1 mr-1 ease-in-out">-&gt;</span>
                        </p>
                    }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default EncoderContent;
