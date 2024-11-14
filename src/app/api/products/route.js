import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionStr);
        data = await Product.find();
    } catch (error) {
        data = { success: false, message: "Failed to fetch data" };
    }
    return NextResponse.json({ result: data });
}