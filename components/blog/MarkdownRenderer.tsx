"use client";

import { useMemo } from "react";

// ── Affiliate link mapping ──────────────────────────────────────────
const AFFILIATE_LINKS: Record<string, { url: string; label: string }> = {
  // Hosting
  'hostinger': { url: 'https://www.hostg.xyz/aff_c?offer_id=6&aff_id=148098', label: 'Hostinger' },
  'bluehost': { url: 'https://www.bluehost.com/track/rubabsdigital', label: 'Bluehost' },
  'a2 hosting': { url: 'https://www.a2hosting.com/?aid=rubabsdigital', label: 'A2 Hosting' },
  'a2hosting': { url: 'https://www.a2hosting.com/?aid=rubabsdigital', label: 'A2 Hosting' },
  'siteground': { url: 'https://www.siteground.com/index.htm?afcode=rubabsdigital', label: 'SiteGround' },
  'cloudways': { url: 'https://www.cloudways.com/en/?id=rubabsdigital', label: 'Cloudways' },
  'greengeeks': { url: 'https://www.greengeeks.com/track/rubabsdigital', label: 'GreenGeeks' },
  'dreamhost': { url: 'https://www.dreamhost.com/r.cgi?rubabsdigital', label: 'DreamHost' },
  'namecheap': { url: 'https://www.namecheap.com/?aff=rubabsdigital', label: 'Namecheap' },
  'hostgator': { url: 'https://partners.hostgator.com/rubabsdigital', label: 'HostGator' },
  'scala hosting': { url: 'https://www.scalahosting.com/?aff=rubabsdigital', label: 'Scala Hosting' },
  'scalahosting': { url: 'https://www.scalahosting.com/?aff=rubabsdigital', label: 'Scala Hosting' },
  'interserver': { url: 'https://www.interserver.net/r/rubabsdigital', label: 'InterServer' },
  'inmotion': { url: 'https://www.inmotionhosting.com/?aid=rubabsdigital', label: 'InMotion Hosting' },
  'inmotionhosting': { url: 'https://www.inmotionhosting.com/?aid=rubabsdigital', label: 'InMotion Hosting' },
  'chemicloud': { url: 'https://chemicloud.com/?aff=rubabsdigital', label: 'ChemiCloud' },
  'wpx hosting': { url: 'https://wpx.net/?aff=rubabsdigital', label: 'WPX Hosting' },
  'wpxhosting': { url: 'https://wpx.net/?aff=rubabsdigital', label: 'WPX Hosting' },
  'liquidweb': { url: 'https://www.liquidweb.com/?aff=rubabsdigital', label: 'Liquid Web' },
  'fastcomet': { url: 'https://www.fastcomet.com/?aff=rubabsdigital', label: 'FastComet' },
  'ionos': { url: 'https://www.ionos.com/?aff=rubabsdigital', label: 'IONOS' },
  'godaddy': { url: 'https://www.godaddy.com/?aff=rubabsdigital', label: 'GoDaddy' },
  // VPN
  'nordvpn': { url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=rubabsdigital', label: 'NordVPN' },
  'expressvpn': { url: 'https://www.expressvpn.com/?aff=rubabsdigital', label: 'ExpressVPN' },
  'surfshark': { url: 'https://surfshark.com/?aff=rubabsdigital', label: 'Surfshark' },
  // AI Tools
  'jasper': { url: 'https://www.jasper.ai/?aff=rubabsdigital', label: 'Jasper' },
  'writesonic': { url: 'https://writesonic.com/?via=rubabsdigital', label: 'Writesonic' },
  'grammarly': { url: 'https://www.grammarly.com/?aff=rubabsdigital', label: 'Grammarly' },
  // Design
  'canva': { url: 'https://partner.canva.com/rubabsdigital', label: 'Canva' },
  'figma': { url: 'https://www.figma.com', label: 'Figma' },
  // Video
  'filmora': { url: 'https://filmora.wondershare.com/?aff=rubabsdigital', label: 'Filmora' },
  // SEO
  'semrush': { url: 'https://www.semrush.com/?ref=rubabsdigital', label: 'SEMrush' },
  'ahrefs': { url: 'https://ahrefs.com/?ref=rubabsdigital', label: 'Ahrefs' },
  // Email
  'mailchimp': { url: 'https://mailchimp.com/?aff=rubabsdigital', label: 'Mailchimp' },
  'convertkit': { url: 'https://convertkit.com/?lmref=rubabsdigital', label: 'ConvertKit' },
  // Other
  'elementor': { url: 'https://elementor.com/?ref=rubabsdigital', label: 'Elementor' },
  'shopify': { url: 'https://www.shopify.com/?ref=rubabsdigital', label: 'Shopify' },
  'wix': { url: 'https://www.wix.com/?aff=rubabsdigital', label: 'Wix' },
};

function resolveAffiliateLink(name: string): { url: string; label: string } | null {
  const key = name.trim().toLowerCase();
  return AFFILIATE_LINKS[key] || null;
}

// ── YouTube Video ID Validator ──────────────────────────────────────
const YOUTUBE_ID_RE = /^[A-Za-z0-9_-]{11}$/;

function isValidYouTubeId(id: string): boolean {
  return YOUTUBE_ID_RE.test(id);
}

// ── YouTubeEmbed Component (Correction 3: whitelist, not raw iframe) ─
function YouTubeEmbed({ videoId }: { videoId: string }) {
  if (!isValidYouTubeId(videoId)) return null;
  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        loading="lazy"
        allowFullScreen
        title={`YouTube video ${videoId}`}
        sandbox="allow-scripts allow-same-origin allow-presentation"
      />
    </div>
  );
}

// ── HTML Sanitizer (Correction 3: whitelist-only, no raw passthrough) ─
const SAFE_TAGS = new Set([
  'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'del', 'ins',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'dl', 'dt', 'dd',
  'a', 'img',
  'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  'figure', 'figcaption',
  'hr', 'sup', 'sub', 'mark', 'small', 'span', 'div',
]);

const SAFE_ATTRS: Record<string, Set<string>> = {
  'a': new Set(['href', 'title', 'target', 'rel', 'class']),
  'img': new Set(['src', 'alt', 'title', 'loading', 'width', 'height', 'class']),
  'td': new Set(['colspan', 'rowspan', 'class']),
  'th': new Set(['colspan', 'rowspan', 'class', 'scope']),
  'div': new Set(['class']),
  'span': new Set(['class']),
  'p': new Set(['class']),
  'figure': new Set(['class']),
  'blockquote': new Set(['class', 'cite']),
  'ol': new Set(['start', 'type']),
  'code': new Set(['class']),
  'pre': new Set(['class']),
};

/**
 * Sanitize HTML: strip unsafe tags, validate attributes,
 * extract YouTube iframes into safe components.
 * Returns an array of React elements (text + YouTubeEmbed components).
 */
function sanitizeAndRender(html: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = html;
  let keyCounter = 0;

  // Extract YouTube iframes and replace with markers
  const youtubeMarker = '___YT_EMBED_';
  const youtubeIds: string[] = [];

  // Match YouTube iframes (standard and nocookie)
  remaining = remaining.replace(
    /<iframe[^>]*src=["'](?:https?:)?\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/embed\/([A-Za-z0-9_-]{11})[^"']*["'][^>]*>(?:<\/iframe>)?/gi,
    (_, videoId) => {
      if (isValidYouTubeId(videoId)) {
        const idx = youtubeIds.length;
        youtubeIds.push(videoId);
        return `<div class="yt-placeholder" data-idx="${idx}"></div>`;
      }
      return ''; // Strip invalid iframe
    }
  );

  // Also catch raw YouTube URLs on their own line
  remaining = remaining.replace(
    /(?:<p>)?\s*(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:[^\s<]*)?\s*(?:<\/p>)?/gi,
    (_, videoId) => {
      if (isValidYouTubeId(videoId)) {
        const idx = youtubeIds.length;
        youtubeIds.push(videoId);
        return `<div class="yt-placeholder" data-idx="${idx}"></div>`;
      }
      return '';
    }
  );

  // Strip ALL remaining iframes (non-YouTube)
  remaining = remaining.replace(/<iframe[^>]*>(?:<\/iframe>)?/gi, '');

  // Strip script, style, object, embed tags
  remaining = remaining.replace(/<\/?(?:script|style|object|embed|form|input|textarea|button|select|option)[^>]*>/gi, '');

  // Strip on* event handlers from any remaining tags
  remaining = remaining.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '');
  remaining = remaining.replace(/\s+on\w+\s*=\s*\S+/gi, '');

  // Strip javascript: and data: URLs
  remaining = remaining.replace(/href\s*=\s*["'](?:javascript|data):[^"']*["']/gi, 'href="#"');
  remaining = remaining.replace(/src\s*=\s*["'](?:javascript|data):[^"']*["']/gi, 'src=""');

  // Sanitize attributes on remaining tags
  remaining = remaining.replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
    const tagLower = tag.toLowerCase();
    if (!SAFE_TAGS.has(tagLower)) {
      // Strip unsafe tags but keep content
      return '';
    }
    const allowedAttrs = SAFE_ATTRS[tagLower];
    if (!allowedAttrs || !attrs.trim()) {
      return `<${tagLower}>`;
    }
    // Parse and filter attributes
    const safeAttrs: string[] = [];
    const attrRegex = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrs)) !== null) {
      const attrName = attrMatch[1].toLowerCase();
      const attrVal = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
      if (allowedAttrs.has(attrName)) {
        safeAttrs.push(`${attrName}="${escapeAttr(attrVal)}"`);
      }
    }
    return `<${tagLower}${safeAttrs.length ? ' ' + safeAttrs.join(' ') : ''}>`;
  });

  // Close stripped unsafe tags
  remaining = remaining.replace(/<\/(\w+)>/g, (match, tag) => {
    return SAFE_TAGS.has(tag.toLowerCase()) ? `</${tag.toLowerCase()}>` : '';
  });

  // Process affiliate tags
  remaining = remaining.replace(/\[AFFILIATE:\s*([^\]]+)\]/gi, (_, name) => {
    const affiliate = resolveAffiliateLink(name);
    if (affiliate) {
      return `<a href="${affiliate.url}" target="_blank" rel="noopener noreferrer nofollow" class="affiliate-link">${affiliate.label} →</a>`;
    }
    return `<strong>${escapeHtml(name.trim())}</strong>`;
  });

  // Fix internal links (rubabsdigital.com → relative)
  remaining = remaining.replace(
    /href="https?:\/\/(?:www\.)?rubabsdigital\.com\/blog\/([^"]+)"/gi,
    'href="/blog/$1"'
  );

  // Open external links in new tab
  remaining = remaining.replace(
    /<a\s+href="(https?:\/\/(?!(?:www\.)?rubabsdigital\.com)[^"]+)"/gi,
    '<a href="$1" target="_blank" rel="noopener noreferrer nofollow"'
  );

  // Remove empty paragraphs
  remaining = remaining.replace(/<p>\s*<\/p>/g, '');

  // Now split by YouTube placeholders and build React nodes
  const parts = remaining.split(/<div class="yt-placeholder" data-idx="(\d+)"><\/div>/);

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // HTML content part
      const htmlPart = parts[i].trim();
      if (htmlPart) {
        nodes.push(
          <div key={`html-${keyCounter++}`} dangerouslySetInnerHTML={{ __html: htmlPart }} />
        );
      }
    } else {
      // YouTube embed placeholder
      const idx = parseInt(parts[i], 10);
      if (idx < youtubeIds.length) {
        nodes.push(<YouTubeEmbed key={`yt-${keyCounter++}`} videoId={youtubeIds[idx]} />);
      }
    }
  }

  return nodes;
}

// ── Main Component ─────────────────────────────────────────────────
export function MarkdownRenderer({ content }: { content: string }) {
  const rendered = useMemo(() => {
    // Detect if content is HTML (from WordPress) vs Markdown
    const isHtml = /<[a-z][\s\S]*>/i.test(content) && (
      content.includes('<p>') || content.includes('<div>') ||
      content.includes('<h2>') || content.includes('<h3>') ||
      content.includes('<iframe') || content.includes('<figure')
    );

    if (isHtml) {
      // WordPress HTML — sanitize with whitelist, extract YouTube embeds
      return sanitizeAndRender(content);
    }

    // Markdown content — process affiliates, convert to HTML, then sanitize
    const processed = processAffiliateTagsInMarkdown(content);
    const html = markdownToHtml(processed);
    return sanitizeAndRender(html);
  }, [content]);

  return <div className="blog-content">{rendered}</div>;
}

// ── Markdown Processing ────────────────────────────────────────────

function processAffiliateTagsInMarkdown(md: string): string {
  return md.replace(/\[AFFILIATE:\s*([^\]]+)\]/gi, (_, name) => {
    const affiliate = resolveAffiliateLink(name);
    if (affiliate) {
      return `[${affiliate.label} →](${affiliate.url})`;
    }
    return `**${name.trim()}**`;
  });
}

function markdownToHtml(md: string): string {
  let html = md;

  // Convert raw YouTube URLs to embed placeholders
  html = html.replace(
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:[^\s]*)?\s*$/gm,
    '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/$1" loading="lazy" allowfullscreen title="Video"></iframe></div>'
  );

  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`);
  // Inline code
  html = html.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, src) => `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" />`);

  // Tables
  html = html.replace(/(?:^|\n)((?:\|[^\n]+\|\n)+)/g, (_, tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter((r: string) => r.trim());
    if (rows.length < 2) return tableBlock;

    const parseRow = (row: string) =>
      row.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());

    const isSeparator = (row: string) => /^\|?[\s-:|]+\|?$/.test(row);

    let tableHtml = '<table>';
    let startData = 0;

    if (rows.length >= 2 && isSeparator(rows[1])) {
      const headers = parseRow(rows[0]);
      tableHtml += '<thead><tr>' + headers.map((h: string) => `<th>${escapeHtml(h)}</th>`).join('') + '</tr></thead>';
      startData = 2;
    }

    tableHtml += '<tbody>';
    for (let i = startData; i < rows.length; i++) {
      if (isSeparator(rows[i])) continue;
      const cells = parseRow(rows[i]);
      tableHtml += '<tr>' + cells.map((c: string) => `<td>${escapeHtml(c)}</td>`).join('') + '</tr>';
    }
    tableHtml += '</tbody></table>';
    return '\n' + tableHtml + '\n';
  });

  // Headers
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
  // Bold italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const isAffiliate = text.endsWith(' →') || url.includes('aff') || url.includes('ref=') || url.includes('via=') || url.includes('partner') || url.includes('track');
    const cls = isAffiliate ? ' class="affiliate-link"' : '';
    const isInternal = url.startsWith('/') || url.includes('rubabsdigital.com');
    const target = isInternal ? '' : ' target="_blank" rel="noopener noreferrer nofollow"';
    return `<a href="${escapeAttr(url)}"${target}${cls}>${escapeHtml(text)}</a>`;
  });
  // Blockquote
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');
  // Unordered list
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  // Ordered list
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  // HR
  html = html.replace(/^---$/gm, '<hr />');
  // Paragraphs
  html = html.replace(/^(?!<[hupblodit]|<li|<hr|<pre|<code|<img|<table|<thead|<tbody|<tr|<th|<td|<div)(.+)$/gm, '<p>$1</p>');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
