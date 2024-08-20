import Script from "next/script";

export default function GoogleAnalytics() {
  if (!process.env.NEXT_PUBLIC_GA) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${process.env.NEXT_PUBLIC_GA}');
		`
        }}
      />
    </>
  );
}
