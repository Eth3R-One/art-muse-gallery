import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export default function ZoomableImage({ src, alt, className, style }) {
	if (!src) return null;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Image
					src={src}
					alt={alt || ""}
					sizes="1000vw"
					className={className}
					style={style}
					width={1080}
					height={1080}
				/>
			</DialogTrigger>
			<DialogContent className="max-w-7xl border-0 bg-transparent p-0">
				<div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
					<Image
						src={src}
						fill
						alt={alt || ""}
						className="h-full w-full object-contain"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
