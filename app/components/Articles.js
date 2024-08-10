"use client";

import { useQuery } from "react-query";

const fetchArticles = async () => {
  const res = await fetch("https://pandooin.com/api/zamrood/article");
  return res.json();
};

const Articles = () => {
  const { data, error, isLoading } = useQuery("articles", fetchArticles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const articles = data.data;

  return (
    <section id="article" className="scroll-mt-20 px-4 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6">
      <div id="header" className="flex flex-col space-y-2">
        <h1 className="font-unbounded text-[22px] lg:text-4xl font-bold text-dark-aquaman">Articles</h1>
        <p className="text-base lg:text-2xl text-dark-aquaman">
          Our curated writings, offering something for every reader.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        <a
          className="w-full flex flex-col lg:row-span-2 lg:col-span-2"
          target="_blank"
          href={`https://pandooin.com/blog/article/${articles[0].slug}`}
        >
          <div className="relative w-full h-full aspect-video overflow-hidden">
            <img
              alt={articles[0].featured_image_caption}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
              sizes="100vw"
              src={articles[0].featured_image}
              style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
            />
          </div>
          <div className="w-full p-6 lg:p-4 bg-dark-aquaman flex flex-col space-y-2">
            <h2 className="m-0 text-vista-white text-base font-bold line-clamp-2">{articles[0].title}</h2>
          </div>
        </a>
        {articles.slice(1, 5).map((article, index) => (
          <a
            className="w-full flex flex-col "
            key={index}
            target="_blank"
            href={`https://pandooin.com/blog/article/${article.slug}`}
          >
            <div className="relative w-full h-full aspect-video overflow-hidden">
              <img
                alt={article.featured_image_caption}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
                sizes="100vw"
                src={article.featured_image}
                style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
              />
            </div>
            <div className="w-full p-6 lg:p-4 bg-dark-aquaman flex flex-col space-y-2">
              <h2 className="m-0 text-vista-white text-base font-bold line-clamp-2">{article.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
