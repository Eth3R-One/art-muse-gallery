import { getExhibitions } from "@/app/actions/exhibitionsActions";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const POST = async (request) => {
	try {
		const { pageNo } = await request.json();
		const data = await getExhibitions({ PAGE: pageNo });
		return NextResponse.json(data);
	} catch (err) {
		return new NextResponse(JSON.stringify({ message: err?.message }), {
			status: 500,
		});
	}
};
