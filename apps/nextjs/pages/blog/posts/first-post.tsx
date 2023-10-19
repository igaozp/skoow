import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import React from "react";
import Layout from "../../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <Image src="/images/profile.jpg" alt="Profile" width={144} height={144}>
            </Image>
            <h1>First Post</h1>
            <h2>
                <Link href='/blog'>Back to home</Link>
            </h2>
        </Layout>
    );
}

