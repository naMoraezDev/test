type VideoHighlightProps = {
  videoEmbedSrc: RegExpMatchArray | null;
};

export function VideoHighlight({ videoEmbedSrc }: VideoHighlightProps) {
  return (
    <div className="relative pb-[56.25%] h-0 mb-40 rounded-normal overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoEmbedSrc?.toString()}
      />
    </div>
  );
}
