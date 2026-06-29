const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Radical Party — Links</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080810;
    --surface: #0f0f1a;
    --border: rgba(255,255,255,0.07);
    --accent: #7c3aed;
    --accent2: #06b6d4;
    --accent3: #f43f5e;
    --text: #e2e8f0;
    --muted: #64748b;
    --glow: rgba(124,58,237,0.3);
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* animated bg grid */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 0;
    pointer-events: none;
  }

  .noise {
    position: fixed;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 256px;
    pointer-events: none;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }

  /* header */
  .header {
    text-align: center;
    margin-bottom: 56px;
  }

  .logo-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid var(--accent);
    box-shadow: 0 0 40px var(--glow), inset 0 0 20px rgba(124,58,237,0.1);
    margin-bottom: 20px;
    font-size: 32px;
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 40px var(--glow), inset 0 0 20px rgba(124,58,237,0.1); }
    50% { box-shadow: 0 0 60px rgba(124,58,237,0.5), inset 0 0 30px rgba(124,58,237,0.2); }
  }

  .header h1 {
    font-family: 'Space Mono', monospace;
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 700;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #fff 0%, var(--accent2) 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .header p {
    color: var(--muted);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }
  .divider span {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  /* link cards */
  .links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    text-decoration: none;
    color: var(--text);
    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
    position: relative;
    overflow: hidden;
    group: true;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background: linear-gradient(135deg, var(--card-from, rgba(124,58,237,0.08)), var(--card-to, rgba(6,182,212,0.05)));
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  .card:hover {
    border-color: rgba(124,58,237,0.35);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.15);
  }

  .card:hover::before { opacity: 1; }

  .card:active { transform: translateY(0); }

  .icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    position: relative;
    z-index: 1;
  }

  .info {
    flex: 1;
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  .info strong {
    display: block;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info span {
    font-size: 13px;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .badge {
    flex-shrink: 0;
    font-size: 11px;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  .badge-live {
    background: rgba(16,185,129,0.15);
    color: #10b981;
    border: 1px solid rgba(16,185,129,0.25);
  }

  .badge-app {
    background: rgba(6,182,212,0.12);
    color: var(--accent2);
    border: 1px solid rgba(6,182,212,0.2);
  }

  .badge-tool {
    background: rgba(124,58,237,0.15);
    color: #a78bfa;
    border: 1px solid rgba(124,58,237,0.25);
  }

  .badge-fun {
    background: rgba(244,63,94,0.12);
    color: #fb7185;
    border: 1px solid rgba(244,63,94,0.2);
  }

  .arrow {
    color: var(--muted);
    font-size: 18px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease, color 0.2s ease;
    flex-shrink: 0;
  }

  .card:hover .arrow {
    transform: translateX(4px);
    color: var(--accent2);
  }

  /* section label */
  .section {
    margin-top: 36px;
    margin-bottom: 4px;
  }

  /* footer */
  .footer {
    margin-top: 60px;
    text-align: center;
    color: var(--muted);
    font-size: 13px;
    font-family: 'Space Mono', monospace;
  }

  .footer a {
    color: var(--accent);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  .footer a:hover { opacity: 1; }
</style>
</head>
<body>
<div class="noise"></div>
<div class="container">

  <div class="header">
    <div class="logo-ring">⚡</div>
    <h1>The Radical Party</h1>
    <p>everything, in one place</p>
  </div>

  <div class="divider"><span>projects</span></div>

  <div class="links">

    <a class="card" href="https://theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🏠</div>
      <div class="info">
        <strong>The Radical Party</strong>
        <span>theradicalparty.com</span>
      </div>
      <span class="badge badge-live">live</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://movies.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🎬</div>
      <div class="info">
        <strong>Radical Movies</strong>
        <span>movies.theradicalparty.com</span>
      </div>
      <span class="badge badge-live">live</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://pirates.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🏴‍☠️</div>
      <div class="info">
        <strong>Pirates</strong>
        <span>pirates.theradicalparty.com</span>
      </div>
      <span class="badge badge-app">app</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://radicalcures.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">💊</div>
      <div class="info">
        <strong>Radical Cures</strong>
        <span>radicalcures.theradicalparty.com</span>
      </div>
      <span class="badge badge-app">app</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://makeamillyoritsembarassing.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">💰</div>
      <div class="info">
        <strong>Make a Milly or It's Embarrassing</strong>
        <span>makeamillyoritsembarassing.theradicalparty.com</span>
      </div>
      <span class="badge badge-live">live</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://goaty.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🐐</div>
      <div class="info">
        <strong>Goaty</strong>
        <span>goaty.theradicalparty.com</span>
      </div>
      <span class="badge badge-app">app</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://hotornot.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🔥</div>
      <div class="info">
        <strong>Hot or Not</strong>
        <span>hotornot.theradicalparty.com</span>
      </div>
      <span class="badge badge-fun">fun</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://noted.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">📝</div>
      <div class="info">
        <strong>Noted</strong>
        <span>noted.theradicalparty.com</span>
      </div>
      <span class="badge badge-tool">tool</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://clock.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🕐</div>
      <div class="info">
        <strong>Clock</strong>
        <span>clock.theradicalparty.com</span>
      </div>
      <span class="badge badge-tool">tool</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://talk.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">💬</div>
      <div class="info">
        <strong>Talk</strong>
        <span>talk.theradicalparty.com</span>
      </div>
      <span class="badge badge-app">app</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://momos.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🥟</div>
      <div class="info">
        <strong>Momos</strong>
        <span>momos.theradicalparty.com</span>
      </div>
      <span class="badge badge-fun">fun</span>
      <span class="arrow">→</span>
    </a>

<a class="card" href="https://plausibledeniability.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🙈</div>
      <div class="info">
        <strong>Plausible Deniability</strong>
        <span>plausibledeniability.theradicalparty.com</span>
      </div>
      <span class="badge badge-fun">fun</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://busted.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">💥</div>
      <div class="info">
        <strong>Busted</strong>
        <span>busted.theradicalparty.com</span>
      </div>
      <span class="badge badge-fun">fun</span>
      <span class="arrow">→</span>
    </a>

    <a class="card" href="https://android.theradicalparty.com" target="_blank" rel="noopener">
      <div class="icon">🤖</div>
      <div class="info">
        <strong>Android</strong>
        <span>android.theradicalparty.com</span>
      </div>
      <span class="badge badge-app">app</span>
      <span class="arrow">→</span>
    </a>

  </div>

  <div class="footer">
    <p>© 2026 <a href="https://theradicalparty.com">theradicalparty.com</a> — radical by default</p>
  </div>

</div>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=300',
      },
    });
  },
};
