import type { NextPage } from 'next'
import Head from 'next/head'
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import { abort } from 'process';

const Home: NextPage = () => {

    const twitterIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 310"
            className="animate-bounce w-10"
            xmlSpace="preserve"
            fill="gold"
        >
            <path d="M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z" />
        </svg>
    );

    const typer = useRef(null);

    useEffect(() => {
        const typed = new Typed(typer.current || "" , {
            strings: [
                "We are builders",
                "We are investors",
                "We are team players",
                "We are <span class='font-bold'> Goldman DAO"],
            startDelay: 300,
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1000,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="container h-screen mx-auto px-2 py-8 grid content-center">
            <Head>
                <title>Goldman DAO</title>
                <meta name="description" content="We are Goldman DAO" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎩</text></svg>" />
            </Head>

            <main className="flex flex-column justify-center">
                <div className="text-3xl">
                    <span ref={typer}></span>
                </div>
                <div className="absolute bottom-20">
                <a href="https://twitter.com/GoldmanDAO">{twitterIcon()}</a>
                </div>
            </main>
        </div>
    )
}

export default Home
