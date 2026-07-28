import Navbar from "../../components/layout/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to JobTracker
        </h1>

        <p className="mt-5 max-w-xl text-lg text-gray-600">
          Track your job applications, interviews, and offers in one place.
        </p>
      </main>
    </>
  );
}

export default Home;