import Script from 'next/script';
import { useEffect, useState } from 'react';

type DugoutProps = {
  saveContent: string;
};

export default function Dugout({ saveContent }: DugoutProps) {
  const [render, setRender] = useState(false);

  function parseEmbeded(contentParsed: string) {
    const originalString = contentParsed;
    const appendString = 'async=true ';
    const indexToInsert = originalString.indexOf('type="text/javascript"');

    if (indexToInsert !== -1) {
      const firstPart = originalString.slice(0, indexToInsert);
      const secondPart = originalString.slice(indexToInsert);
      const resultString = firstPart + appendString + secondPart;
      return resultString;
    }
    return contentParsed;
  }

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <>
      {render && (
        <>
          <Script
            async
            type="text/javascript"
            src="https://embed.dugout.com/v3.1/lance.js"
          />

          <div className="container">
            <div
              className="divFrame"
              dangerouslySetInnerHTML={{
                __html: parseEmbeded(saveContent),
              }}
            />

            <style jsx>{`
              .container {
                position: relative;
                width: 100%;
                overflow: hidden;
                padding-bottom: 70%;
                margin-bottom: 40px;
              }

              .container .divFrame {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }
            `}</style>
          </div>
        </>
      )}
    </>
  );
}
