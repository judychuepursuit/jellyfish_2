import "./Footer.css";

export default function Footer() {
    return (
<div className="footer-container">
        <p className="footer-text">
        <span className="source-style">*Sources:</span>
          <a href="https://www.wikipedia.org/">https://www.wikipedia.org/</a> <span className="source-style">*</span>
          <a href="https://www.americanoceans.org/facts/types-of-jellyfish/">https://www.americanoceans.org/facts/types-of-jellyfish/</a> <span className="source-style">*</span>
          <a href="https://www.jellywatch.org/blooms/facts">https://www.jellywatch.org/blooms/facts</a> <span className="source-style">*</span>
          <a href="https://www.mcsuk.org/news/fascinating-facts-about-jellyfish/">https://www.mcsuk.org/news/fascinating-facts-about-jellyfish/</a>.
        </p>
      </div>
    );
}