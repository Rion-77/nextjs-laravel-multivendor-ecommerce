function Loading() {
  return (
    <div className="page-loader" aria-hidden="true">
      <div className="spinner">
        <span className="spin-ring"></span>
        <b className="spin-logo">✚</b>
      </div>
      <p className="spin-text">Loading…</p>
    </div>
  );
}

export default Loading;
