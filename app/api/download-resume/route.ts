import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the resume PDF file
    const filePath = path.join(process.cwd(), "public", "resume.pdf")

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file as a response
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Divya_Tiwari_Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("Error downloading resume:", error)
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 })
  }
}
