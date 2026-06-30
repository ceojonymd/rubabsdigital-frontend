const API_BASE = process.env.NEXT_PUBLIC_RD_API_URL || 'https://rubabsdigital-api.rdceojony.workers.dev';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  meta_title: string;
  meta_description: string;
  keywords: string | string[];
  word_count: number;
  reading_time: number;
  difficulty: string;
  featured_image?: string;
  created_at: string;
  updated_at?: string;
  content?: string;
  author?: string;
  status?: string;
  r2_key?: string;
}

export interface PaginatedResponse {
  articles: Article[];
  pagination: { page: number; limit: number; total: number; pages: number };
}

export interface SearchResult {
  query: string;
  results: (Article & { title_highlight?: string; content_snippet?: string })[];
  total: number;
}

export async function fetchArticles(page = 1, limit = 12, category?: string): Promise<PaginatedResponse> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (category) params.set('category', category);
  const res = await fetch(`${API_BASE}/api/articles?${params}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

export async function fetchArticle(slug: string): Promise<Article> {
  const res = await fetch(`${API_BASE}/api/articles/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Article not found');
  return res.json();
}

export async function searchArticles(query: string, limit = 20): Promise<SearchResult> {
  const params = new URLSearchParams({ q: query, limit: String(limit) });
  const res = await fetch(`${API_BASE}/api/articles/search?${params}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function fetchHealth(): Promise<{ status: string; articles: number }> {
  const res = await fetch(`${API_BASE}/api/health`, { next: { revalidate: 60 } });
  return res.json();
}

export const CATEGORIES: Record<string, { label: string; icon: string; color: string }> = {
  web_hosting: { label: 'Web Hosting', icon: '🌐', color: '#2563eb' },
  cloud_devops: { label: 'Cloud & DevOps', icon: '☁️', color: '#7c3aed' },
  web_development: { label: 'Web Development', icon: '💻', color: '#059669' },
  ai_tools: { label: 'AI Tools', icon: '🤖', color: '#d946ef' },
  social_media: { label: 'Social Media', icon: '📱', color: '#f43f5e' },
  automation_tools: { label: 'Automation', icon: '⚡', color: '#f59e0b' },
  design_tools: { label: 'Design Tools', icon: '🎨', color: '#ec4899' },
  video_editing: { label: 'Video Editing', icon: '🎬', color: '#ef4444' },
  seo_marketing: { label: 'SEO & Marketing', icon: '📈', color: '#10b981' },
  cybersecurity: { label: 'Cybersecurity', icon: '🔒', color: '#6366f1' },
  productivity: { label: 'Productivity', icon: '📋', color: '#8b5cf6' },
  passive_income: { label: 'Passive Income', icon: '💰', color: '#eab308' },
  email_marketing: { label: 'Email Marketing', icon: '📧', color: '#14b8a6' },
};

export function getCategoryInfo(cat: string) {
  return CATEGORIES[cat] || { label: cat.replace(/_/g, ' '), icon: '📄', color: '#6b7280' };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}
