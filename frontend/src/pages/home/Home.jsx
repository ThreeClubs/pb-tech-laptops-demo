function Home() {
  return (
    <>
      {/* Navigation and authentication */}
      <Navbar />

      {/* Main search functionality */}
      <HomeSearch />

      {/* Banner 1 */}
      <LaptopGuide />
      {/* Carousel */}
      <Laptops />
      {/* Banner 2 */}
      <OffLease />
      {/* Links  */}
      <Articles />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
