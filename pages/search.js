import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import TestResponse from '../TestResponse';

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <div>
        {/* Header */}
        <Header />
        {/* Search Results */}
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const useDammyData = false;
  const startIndex = context.query.start || '0';
  const searchUrl = 'https://www.googleapis.com/customsearch/v1';

  const response = useDammyData
    ? TestResponse
    : await fetch(
        `${searchUrl}?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex} `
      );

  const data = useDammyData ? TestResponse : await response.json();

  return {
    props: {
      results: data,
    },
  };
};
