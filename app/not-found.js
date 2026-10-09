import Link from "next/link";

function NotFound() {
  return (
    <main class="container-xxl shell">
      <section class="nf">
        <div class="nf-code" aria-hidden="true">
          <span>4</span>
          <span class="nf-pill">💊</span>
          <span>4</span>
        </div>
        <h1 class="h3 fw-bold">Oops! Page not found</h1>
        <p class="text-secondary nf-text">
          The page you are looking for may have been moved, renamed or never existed. Try searching for your medicine or
          head back to the shop.
        </p>
        <div class="d-flex flex-wrap gap-2 justify-content-center">
          <Link href="/" class="btn btn-m px-4 py-2">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
