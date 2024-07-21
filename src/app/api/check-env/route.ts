export async function GET() {
  const env = process.env.NODE_ENV;

  return Response.json({ data: env });
}
