import { Button } from "@/components/ui/button";

const HeroSection = () => {
	return (
		<>
			{/* Hero Section */}
			<div className="relative flex flex-col items-center justify-center py-24 lg:py-32">
				{/* Background Video */}
				<video
					className="hero__video rounded-lg absolute top-10 left-0 w-full h-full object-cover"
					controls={false}
					autoPlay
					loop
					muted
					title="Video of The Art Institute of Chicago."
				>
					<source
						src="https://aic-web-cms-uploads.s3.us-east-2.amazonaws.com/c2a3174a-9ee2-4f11-a314-12ca9a7da035/HomepageVideo_OKeeffe_v2_small.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>

				{/* Hero Content */}
				<div className="relative z-20 max-w-2xl text-center text-[#EBE9CF]">
					<p className="text-2xl lg:text-3xl">Welcome To</p>

					{/* Title */}
					<h1 className="mt-5 p-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
						THE ART INSTITUTE OF CHICAGO
					</h1>

					{/* Call to Action Button */}
					<div className="mt-8 flex justify-center gap-3">
						<Button
							size="lg"
							variant="outline"
							className="border-[#3B3A31] text-[#3B3A31] hover:bg-[#3B3A31] hover:text-[#EBE9CF]"
						>
							Plan Your Visit
						</Button>
					</div>
				</div>
			</div>
			{/* End Hero Section */}
		</>
	);
};

export default HeroSection;
