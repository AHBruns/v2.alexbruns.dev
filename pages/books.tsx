import Title from "../components/Title";
import PageBorder from "../components/PageBorder";
import fs from "fs";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";

function Books({ books }) {
  return (
    <PageBorder>
      <Title>Books</Title>
      {books?.length ? (
        <ul className="pl-6 list-disc">
          {books.map(({ title, timestamp, url }) => (
            <Link href={`/books/${url}`}>
              <a>
                <li className="tracking-wider text-gray-700 text-lighter">
                  {title}{" "}
                  <span className="text-xs text-gray-400">
                    {new Date(timestamp).toDateString()}
                  </span>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="tracking-wider text-gray-700 text-lighter">
          Nothing here yet. Check back soon, I guess.
        </p>
      )}
    </PageBorder>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      books: [
        {
          timestamp: 1592204543000,
          title: "Harry Potter and The Sorcerer's Stone",
          url: "harry-potter-and-the-sorcerer's-stone",
        },
      ],
    },
  };
}

export default Books;
