import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/layout/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="home">
        <div id="hero" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button data-bs-target="#hero" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
            <button data-bs-target="#hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide h1">
                <h1>Genuine medicines, delivered home</h1>
                <p>Pharmacist-checked orders with same-day delivery in major cities.</p>
                <button className="wbtn">Shop now</button>
                <div className="art">💊</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide h2">
                <h1>Give yourself a little extra care</h1>
                <p>Up to 50% off skin care this week.</p>
                <button className="wbtn">See deals</button>
                <div className="art">🧴</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec">
          <h2>Product Categories</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x cats">
            <a href="index.html" className="cat">
              <span>💊</span>OTC Medicine
            </a>
            <a href="index.html" className="cat">
              <span>🌸</span>Feminine Care
            </a>
            <a href="index.html" className="cat">
              <span>🌿</span>Herbal & Traditional Medicine
            </a>
            <a href="index.html" className="cat">
              <span>❤️</span>Health Wellness
            </a>
            <a href="index.html" className="cat">
              <span>🧴</span>Skin Care
            </a>
            <a href="index.html" className="cat">
              <span>💇</span>Hair Care
            </a>
            <a href="index.html" className="cat">
              <span>👶</span>Baby Care
            </a>
            <a href="index.html" className="cat">
              <span>🩸</span>Diabetes Care
            </a>
            <a href="index.html" className="cat">
              <span>🍊</span>Vitamins & Supplements
            </a>
            <a href="index.html" className="cat">
              <span>🦷</span>Oral Care
            </a>
            <a href="index.html" className="cat">
              <span>🥣</span>Food & Nutrition
            </a>
            <a href="index.html" className="cat">
              <span>🌡️</span>Health Devices
            </a>
            <a href="index.html" className="cat">
              <span>🏷️</span>Exclusive Deals
            </a>
            <a href="index.html" className="cat">
              <span>🧼</span>Personal Care
            </a>
            <a href="index.html" className="cat">
              <span>🤕</span>Pain & Cold Relief
            </a>
            <a href="index.html" className="cat">
              <span>🩹</span>First Aid & Wound Care
            </a>
            <a href="index.html" className="cat">
              <span>💄</span>Makeup & Cosmetics
            </a>
            <a href="index.html" className="cat">
              <span>🏠</span>Home Care
            </a>
            <a href="index.html" className="cat">
              <span>📄</span>Prescription Medicine
            </a>
          </div>
        </div>


        <div className="sec">
          <h2>OTC Medicine</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x rail">
            <article className="pc">
              <span className="od">10% Off</span>
              <Link href="/products/1">
                <div className="im">💊</div>
                <h3>Napa</h3>
              </Link>
              <div className="mt">Beximco Pharmaceuticals Ltd.</div>
              <div className="pr">
                <b>৳ 10.80</b>
                <s>৳ 12.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="1" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Napa Extra</h3>
              </a>
              <div className="mt">Beximco Pharmaceuticals Ltd.</div>
              <div className="pr">
                <b>৳ 27.00</b>
                <s>৳ 30.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="2" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Fexo</h3>
              </a>
              <div className="mt">Square Pharmaceuticals PLC.</div>
              <div className="pr">
                <b>৳ 81.00</b>
                <s>৳ 90.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="3" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Seclo</h3>
              </a>
              <div className="mt">Square Pharmaceuticals PLC.</div>
              <div className="pr">
                <b>৳ 54.00</b>
                <s>৳ 60.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="4" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Alatrol</h3>
              </a>
              <div className="mt">Square Pharmaceuticals PLC.</div>
              <div className="pr">
                <b>৳ 27.09</b>
                <s>৳ 30.10</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="5" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Tufnil</h3>
              </a>
              <div className="mt">Eskayef Bangladesh Ltd.</div>
              <div className="pr">
                <b>৳ 90.00</b>
                <s>৳ 100.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="6" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">💊</div>
                <h3>Pantonix</h3>
              </a>
              <div className="mt">Incepta Pharmaceuticals Ltd.</div>
              <div className="pr">
                <b>৳ 88.20</b>
                <s>৳ 98.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="7" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
        <div className="sec">
          <h2>Skin Care</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x rail">
            <article className="pc">
              <span className="od">23% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>SkinO Daily Gel Moisturizer 70ml</h3>
              </a>
              <div className="mt">SkinO</div>
              <div className="pr">
                <b>৳ 300.30</b>
                <s>৳ 390.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="8" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">25% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>SkinO Gel Cleanser 100ml</h3>
              </a>
              <div className="mt">SkinO</div>
              <div className="pr">
                <b>৳ 195.00</b>
                <s>৳ 260.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="9" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">5% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>Sunmask</h3>
              </a>
              <div className="mt">Square Pharmaceuticals PLC.</div>
              <div className="pr">
                <b>৳ 237.50</b>
                <s>৳ 250.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="10" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">45% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>Laikou Matcha Mud Mask</h3>
              </a>
              <div className="mt">Laikou</div>
              <div className="pr">
                <b>৳ 27.50</b>
                <s>৳ 50.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="11" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">50% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>SkinO Tea Tree Shower Gel</h3>
              </a>
              <div className="mt">SkinO</div>
              <div className="pr">
                <b>৳ 125.00</b>
                <s>৳ 250.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="12" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">5% Off</span>
              <a href="product.html">
                <div className="im">🧴</div>
                <h3>Mederma Advance Scar Gel</h3>
              </a>
              <div className="mt">Mundipharma</div>
              <div className="pr">
                <b>৳ 1,282.50</b>
                <s>৳ 1,350.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="13" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
        <div className="sec">
          <h2>Baby Care</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x rail">
            <article className="pc">
              <span className="od">4% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>NeoCare Baby Wipes</h3>
              </a>
              <div className="mt">Incepta</div>
              <div className="pr">
                <b>৳ 225.60</b>
                <s>৳ 235.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="14" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">25% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>NeoCare Diaper Belt Small</h3>
              </a>
              <div className="mt">Incepta</div>
              <div className="pr">
                <b>৳ 900.00</b>
                <s>৳ 1,200.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="15" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">20% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>Baby Cotton Buds</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 80.00</b>
                <s>৳ 100.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="16" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">67% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>YC Baby Shampoo</h3>
              </a>
              <div className="mt">YC</div>
              <div className="pr">
                <b>৳ 99.00</b>
                <s>৳ 300.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="17" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">25% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>Avonee Pant Style Diaper</h3>
              </a>
              <div className="mt">Unimax</div>
              <div className="pr">
                <b>৳ 667.50</b>
                <s>৳ 890.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="18" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">25% Off</span>
              <a href="product.html">
                <div className="im">👶</div>
                <h3>NeoCare Diaper Belt Large</h3>
              </a>
              <div className="mt">Incepta</div>
              <div className="pr">
                <b>৳ 1,237.50</b>
                <s>৳ 1,650.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="19" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
        <div className="sec">
          <h2>Health Devices</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x rail">
            <article className="pc">
              <span className="od">28% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>Thermometer Digital</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 216.00</b>
                <s>৳ 300.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="20" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">15% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>Pulse Oximeter (Jumper)</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 1,572.50</b>
                <s>৳ 1,850.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="21" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">20% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>BP Machine Digital (Jumper)</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 2,240.00</b>
                <s>৳ 2,800.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="22" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">18% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>Electric Hot Water Bag</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 451.00</b>
                <s>৳ 550.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="23" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">20% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>Getwell Thermometer</h3>
              </a>
              <div className="mt">Getwell</div>
              <div className="pr">
                <b>৳ 200.00</b>
                <s>৳ 250.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="24" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im">🌡️</div>
                <h3>Blood Lancets (GetWell)</h3>
              </a>
              <div className="mt">Getwell</div>
              <div className="pr">
                <b>৳ 67.50</b>
                <s>৳ 75.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="25" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
        <div className="sec">
          <h2>Exclusive Deals</h2>
          <a href="index.html">See All</a>
        </div>
        <div className="wrap-x">
          <div className="row-x rail">
            <article className="pc">
              <span className="od">18% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>Freyias Sunscreen SPF PA 50 ++ For Oily Skin 50ml</h3>
              </a>
              <div className="mt">Freyias</div>
              <div className="pr">
                <b>৳ 287.00</b>
                <s>৳ 350.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="26" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">50% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>Nature Beauty Shower Gel Buy 1 Get 1</h3>
              </a>
              <div className="mt">Nature Beauty</div>
              <div className="pr">
                <b>৳ 475.00</b>
                <s>৳ 950.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="27" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">40% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>SkinO Anti Dandruff Shampoo Buy 1 Get 1</h3>
              </a>
              <div className="mt">SkinO</div>
              <div className="pr">
                <b>৳ 420.00</b>
                <s>৳ 700.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="28" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">23% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>COSRX Acne Pimple Master Patch</h3>
              </a>
              <div className="mt">Cosrx</div>
              <div className="pr">
                <b>৳ 337.04</b>
                <s>৳ 440.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="29" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">35% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>The Ordinary Glycolic Acid 7% Toner</h3>
              </a>
              <div className="mt">The Ordinary</div>
              <div className="pr">
                <b>৳ 1,820.00</b>
                <s>৳ 2,800.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="30" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">29% Off</span>
              <a href="product.html">
                <div className="im">🏷️</div>
                <h3>3W Clinic Aloe Sunblock SPF50+</h3>
              </a>
              <div className="mt">3W Clinic</div>
              <div className="pr">
                <b>৳ 497.00</b>
                <s>৳ 700.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="31" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
