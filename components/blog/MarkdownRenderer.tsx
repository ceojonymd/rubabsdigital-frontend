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
  const processed = processAffiliateTagsInMarkdown(content);
  const html = markdownToHtml(processed);
  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />;
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
    // Unknown affiliate — render as a styled badge instead of raw tag
    return `**${name.trim()}**`;
  });
}

function markdownToHtml(md: string): string {
  let html = md;
  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`);
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
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
    return `<a href="${url}" target="_blank" rel="noopener noreferrer nofollow"${cls}>${text}</a>`;
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
  html = html.replace(/^(?!<[hupblo]|<li|<hr|<pre|<code)(.+)$/gm, '<p>$1</p>');
  // Remove empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

