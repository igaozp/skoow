import Layout from "../../../components/layout";
import Date from "../../../components/date";
import {getAllPostIds, getPostData} from "../../../lib/posts";
import Head from "next/head";
import utilStyles from '../../../styles/utils.module.css';

// @ts-ignore
export default function Post({postData}) {
    return (
        // @ts-ignore
        <Layout children={undefined} home={undefined}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

// @ts-ignore
export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}