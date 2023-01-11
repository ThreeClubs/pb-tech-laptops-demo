function Articles() {
  return (
    <div className="justify-center mt-8 flex flex-col">
      <img
        className="mx-auto hidden sm:flex"
        src="/images/check-out_articles.png"
        alt="articles heading"
      ></img>
      <h1 className="sm:hidden flex text-sky-600 text-5xl font-bold mx-auto">
        Articles
      </h1>
      <div className="justify-center mb-8 flex flex-col sm:flex-row">
        <img
          className="m-12 sm:m-6 md:m-2 lg:h-full md:h-64 sm:h-48"
          src="/images/best-article_card.png"
          alt="article card"
        />
        <img
          className="m-12 sm:m-6 md:m-2 lg:h-full md:h-64 sm:h-48"
          src="/images/top-article_card.png"
          alt="article card"
        />
        <img
          className="m-12 sm:m-6 md:m-2 lg:h-full md:h-64 sm:h-48"
          src="/images/gaming-article_card.png"
          alt="article card"
        />
      </div>
    </div>
  );
}

export default Articles;
