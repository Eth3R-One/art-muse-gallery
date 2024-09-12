"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import NoImage from "../../../public/images/no_photo.png";
import { formatDate } from "@/utils/dateFormat";
import { useEffect, useState } from "react";
import SpinnerLoader from "@/app/_components/SpinnerLoader";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import ArtworkCard from "./ArtworkCard";

const ArtworksList = ({ artworks }) => {
	const [artworksList, setArtworksList] = useState([...artworks]);
	const [pageNo, setPageNo] = useState(1);
	const [status, setStatus] = useState(false);

	const { toast } = useToast();

	useEffect(() => {
		const getMoreArtworks = async () => {
			try {
				setStatus(true);
				const data = await fetch("/api/artworks", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						pageNo,
					}),
				});

				const moreArtworksdata = await data.json();
				if (moreArtworksdata) {
					setArtworksList((prevArtworks) => [
						...prevArtworks,
						...moreArtworksdata,
					]);
					toast({
						variant: "success",

						description: "12 new Artworks added to the list.",
					});
				}
			} catch (err) {
				console.log(err);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description:
						err?.message ?? "There was a problem with your request.",
				});
			} finally {
				setStatus(false);
			}
		};
		if (pageNo != 1) {
			getMoreArtworks();
		}
	}, [pageNo]);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-5 gap-5 justify-items-center ">
				{artworksList?.map((artwork) => (
					<ArtworkCard key={artwork?.id} artwork={artwork} />
				))}
			</div>
			<div className="pt-10">
				{status ? (
					<SpinnerLoader />
				) : (
					<Button
						className="px-5 py-2 rounded-lg bg-[#3B3A31] text-[#EFEDE0]"
						onClick={() => setPageNo((prevPageno) => prevPageno + 1)}
					>
						Load more
					</Button>
				)}
			</div>
		</>
	);
};

export default ArtworksList;
