export default function Head() {
  return (
    <>
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: https:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; upgrade-insecure-requests"
      />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </>
  );
}
