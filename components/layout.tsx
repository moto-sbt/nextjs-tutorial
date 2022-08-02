import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { FaGithub, FaTwitter } from "react-icons/fa";

const name = 'motosbt';
export const siteTitle = 'motosbt';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (<div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta 
                name='description'
                content='Learn how to build a personal website using Next.js'
            />
            <meta 
                property='og:image'
                content={`https;//or-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name='og:title' content={siteTitle} />
            <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.png"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/images/profile.png"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {home ? (
            <footer className={styles.footer}>
                <a className='github_icon_link' href="https://github.com/moto-sbt/nextjs-blog">
                    <FaGithub size={40} />
                </a>
                <a className='twitter_icon_link' href="https://twitter.com/moto_sbt">
                    <FaTwitter size={40} />
                </a>
            </footer>
        ) : (
        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
        )}
    </div>);
}