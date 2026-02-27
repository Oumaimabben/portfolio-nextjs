import { portfolioData } from '@/lib/portfolio-data';

export async function GET(request: Request, { params }: { params: { slug?: string } }) {
  return Response.json(portfolioData);
}

