import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer";
import styles from './_index.module.css';

export default function Access() {
  const tdStyle = {
    border: "solid 1px",
    borderColor: "#d3d3d3",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "4px",
    paddingBottom: "4px"
  };

  return (
    <Layout title="営業時間・アクセス">
      <main className={styles.main}>
        <a href="/">
          <h3>Topへ</h3>
        </a>
        <h2 className={styles.h2Body}>営業時間・アクセス</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6454.854729781947!2d140.626995!3d36.009856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602254687abc2475%3A0xeca6e6bd9141c2e3!2z576O5a655a6kc3VjY2Vzcy_jg5jjg4Pjg4njgrnjg5E!5e0!3m2!1sja!2sjp!4v1679374360791!5m2!1sja!2sjp"
          width="400"
          height="300"
          style={{ border: "solid 1px", borderColor: "#d3d3d3" }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Mapの店舗地図"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <br />
        <br />
        <table style={{ borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={tdStyle}> 営業時間</td>
              <td style={tdStyle}> 9:00〜19:00</td>
            </tr>
            <tr>
              <td style={tdStyle}> 受付時間</td>
              <td style={tdStyle}>
                9:00〜17:00 カラー / パーマ / ヘッドスパ
                <br />
                9:00〜18:00 カット
              </td>
            </tr>
            <tr>
              <td style={tdStyle}> 定休日</td>
              <td style={tdStyle}> 火曜日</td>
            </tr>
            <tr>
              <td style={tdStyle}> 所在地</td>
              <td style={tdStyle}> 茨城県鹿嶋市小山1072-88</td>
            </tr>
          </tbody>
        </table>
        <br />
        <img
          src="https://images.success-salon.haton14.com/access/salon.avif"
          alt="店舗の外観"
          style={{ display: "block" }}
          width="100%"
        />
        <br />
        <img
          src="https://images.success-salon.haton14.com/access/room.avif"
          alt="店内の様子"
          style={{ display: "block" }}
          width="100%"
        />
        <Footer />
      </main>
    </Layout>
  );
}
