import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        </p>

        <ul>
          <li>
            <strong>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.</strong>
            <p>I am definitely more drawn to the logic, databases, and authentication side of a website. While a good layout is what people see, I find the "under the hood" mechanics much more interesting because I enjoy figuring out how to keep data secure and ensuring the backend functions efficiently.</p>
          </li>

          <li>
            <strong>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</strong>
            <p>I am really eager to get better at Next.js and Tailwind CSS for web development, but I also have a strong interest in React Native. Since I already have an interest in software development and Java, I want to see how these frameworks can help me build more professional, cross-platform applications.</p>
          </li>

          <li>
            <strong>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</strong>
            <p>I have always been curious about how real-time synchronization works, like the way multiple people can edit a document at the same time without overwriting each other's progress. It seems like a complex mix of web sockets and data logic that would be a great challenge to learn.</p>
          </li>
        </ul>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}