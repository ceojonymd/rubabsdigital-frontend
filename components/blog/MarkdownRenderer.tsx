"use client";

// Affiliate link mapping — add your tracking URLs here
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

export function MarkdownRenderer({ content }: { content: string }) {
  // Detect if content is HTML (from WordPress) vs Markdown
  const isHtml = /<[a-z][\s\S]*>/i.test(content) && (
    content.includes('<p>') || content.includes('<div>') ||
    content.includes('<h2>') || content.includes('<h3>') ||
    content.includes('<iframe') || content.includes('<figure')
  );

  if (isHtml) {
    // WordPress HTML content — sanitize and render directly
    const sanitized = sanitizeWpHtml(content);
    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: sanitized }} />;
  }

  // Markdown content — process affiliates, then convert to HTML
  const processed = processAffiliateTagsInMarkdown(content);
  const html = markdownToHtml(processed);
  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

/**
 * Sanitize WordPress HTML content — wrap iframes in responsive containers,
 * convert YouTube links to embeds, fix internal links
 */
function sanitizeWpHtml(html: string): string {
  let out = html;

  // Wrap standalone YouTube iframes in responsive container
  out = out.replace(
    /<iframe([^>]*src=["'][^"']*(?:youtube\.com|youtu\.be)[^"']*["'][^>]*)><\/iframe>/gi,
    '<div class="video-embed"><iframe$1 loading="lazy" allowfullscreen></iframe></div>'
  );

  // Convert raw YouTube URLs to embedded players
  out = out.replace(
    /(?:<p>)?\s*(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(?:[^\s<]*)?\s*(?:<\/p>)?/gi,
    '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/$1" loading="lazy" allowfullscreen title="Video"></iframe></div>'
  );

  // Make internal links relative (rubabsdigital.com → /blog/...)
  out = out.replace(
    /href=["']https?:\/\/(?:www\.)?rubabsdigital\.com\/blog\/([^"']+)["']/gi,
    'href="/blog/$1"'
  );

  // Open external links in new tab
  out = out.replace(
    /<a\s+href=["'](https?:\/\/(?!(?:www\.)?rubabsdigital\.com)[^"']+)["']/gi,
    '<a href="$1" target="_blank" rel="noopener noreferrer nofollow"'
  );

  // Process affiliate tags in HTML content
  out = out.replace(/\[AFFILIATE:\s*([^\]]+)\]/gi, (match, name) => {
    const affiliate = resolveAffiliateLink(name);
    if (affiliate) {
      return `<a href="${affiliate.url}" target="_blank" rel="noopener noreferrer nofollow" class="affiliate-link">${affiliate.label} →</a>`;
    }
    return `<strong>${name.trim()}</strong>`;
  });

  return out;
}

/**
 * Convert [AFFILIATE: Name] or [AFFILIATE:NAME] tags to proper markdown links
 * before the markdown-to-html conversion
 */
function processAffiliateTagsInMarkdown(md: string): string {
  return md.replace(/\[AFFILIATE:\s*([^\]]+)\]/gi, (match, name) => {
    const affiliate = resolveAffiliateLink(name);
    if (affiliate) {
      return `[${affiliate.label} →](${affiliate.url})`;
    }
    return `**${name.trim()}**`;
  });
}

function markdownToHtml(md: string): string {
  let html = md;

  // Convert raw YouTube URLs to embedded players (before other processing)
  html = html.replace(
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(?:[^\s]*)?\s*$/gm,
    '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/$1" loading="lazy" allowfullscreen title="Video"></iframe></div>'
  );

  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`);
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Images (before links to avoid conflict)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy" />');

  // Tables (simple markdown tables)
  html = html.replace(/(?:^|\n)((?:\|[^\n]+\|\n)+)/g, (_, tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter((r: string) => r.trim());
    if (rows.length < 2) return tableBlock;

    const parseRow = (row: string) =>
      row.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());

    // Check if second row is separator (---|---|---)
    const isSeparator = (row: string) => /^\|?[\s-:|]+\|?$/.test(row);

    let tableHtml = '<table>';
    let startData = 0;

    if (rows.length >= 2 && isSeparator(rows[1])) {
      // Has header
      const headers = parseRow(rows[0]);
      tableHtml += '<thead><tr>' + headers.map((h: string) => `<th>${h}</th>`).join('') + '</tr></thead>';
      startData = 2;
    }

    tableHtml += '<tbody>';
    for (let i = startData; i < rows.length; i++) {
      if (isSeparator(rows[i])) continue;
      const cells = parseRow(rows[i]);
      tableHtml += '<tr>' + cells.map((c: string) => `<td>${c}</td>`).join('') + '</tr>';
    }
    tableHtml += '</tbody></table>';
    return '\n' + tableHtml + '\n';
  });

  // Headers (h6 → h1 order matters)
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
  // Bold italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Links (add affiliate styling for affiliate links)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const isAffiliate = text.endsWith(' →') || url.includes('aff') || url.includes('ref=') || url.includes('via=') || url.includes('partner') || url.includes('track');
    const cls = isAffiliate ? ' class="affiliate-link"' : '';
    // Internal links stay in same tab
    const isInternal = url.startsWith('/') || url.includes('rubabsdigital.com');
    const target = isInternal ? '' : ' target="_blank" rel="noopener noreferrer nofollow"';
    return `<a href="${url}"${target}${cls}>${text}</a>`;
  });
  // Blockquote
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');
  // Unordered list items
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  // Ordered list items
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  // HR
  html = html.replace(/^---$/gm, '<hr />');
  // Paragraphs (lines not already wrapped in block elements)
  html = html.replace(/^(?!<[hupblodit]|<li|<hr|<pre|<code|<img|<table|<thead|<tbody|<tr|<th|<td)(.+)$/gm, '<p>$1</p>');
  // Remove empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
