(async () => {
  const targetCount = 40;
  const uniquePins = new Set();
  
  async function collect() {
    const links = Array.from(document.querySelectorAll('a[href^="/pin/"]'));
    links.forEach(link => {
      const match = link.href.match(/\/pin\/(\d+)\//);
      if (match) {
        uniquePins.add('https://www.pinterest.com/pin/' + match[1] + '/');
      }
    });
  }

  while (uniquePins.size < targetCount) {
    await collect();
    window.scrollBy(0, 1000);
    await new Promise(r => setTimeout(r, 1500));
    // Break if we stop getting new ones or hit a limit to avoid infinite loop
    const currentSize = uniquePins.size;
    // Check if we reached the bottom or something
    if (uniquePins.size >= targetCount) break;
  }
  
  return Array.from(uniquePins).slice(0, targetCount);
})()
