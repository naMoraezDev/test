export function getTwitterEmbed(url: string) {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    document.body.removeChild(script);
  }

  if (url.includes('/status')) {
    return (
      <div className="w-[500px] desk-sm:w-[400px] mob:w-full">
        <blockquote className="twitter-tweet">
          <a href={url} />
        </blockquote>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <a
        href={url}
        data-tweet-limit="5"
        className="twitter-timeline"
        data-aria-polite="assertive"
      />
    </div>
  );
}
