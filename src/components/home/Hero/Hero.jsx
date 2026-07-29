import Button from "../../common/button/Button";
import DashboardPreview from "../DashboardPreview/DashboardPreview";
function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF7F5]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-8 lg:h-[calc(100vh-80px)] lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left Section */}
        <div className="flex flex-1 flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h1 className="text-5xl font-extrabold leading-[1.1] text-[#211A52] sm:text-6xl lg:text-[4rem]">
            Track Every Job
            <br />
            Land Faster
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#5F5B80] sm:text-lg sm:leading-8">
            Organize your job applications, monitor interview progress, manage
            offers, and stay on top of your job search — all in one place.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/signup">Get Started</Button>

            <Button to="/features" variant="secondary">
              Explore Features
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <DashboardPreview />
        </div>
      </div>
    </section>
    
  );
}

export default Hero;
