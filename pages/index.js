import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Below is where I put things on the internet. Writings are <Link href="/posts">here</Link></p>
      </section>
    <section>
      <ul>
        <li><Link href="https://blink.cnuc.nu">blink</Link> festive lighting as a service</li>
        <li><Link href="https://grid.cnuc.nu">grid</Link> non interactive points moving in a grid</li>
        <li><Link href="https://riksdag.cnuc.nu">riksdag</Link> data visualization between 1993 to 2022 of members of the Parliament of Sweden</li>
        <li><Link href="https://dots.cnuc.nu">dots</Link> geolocated position marking collaboration tool, continuation of maps.cnuc.nu</li>
        <li><Link href="https://map.cnuc.nu">map</Link> crude geolocated position marking collaboration tool</li>
        <li><Link href="https://time.cnuc.nu">time</Link> the passing of time in circles</li>
        <li><Link href="https://dials.cnuc.nu">dials</Link> the passing of time in dots</li>
        <li><Link href="https://tick.cnuc.nu">tick</Link> time keeping in second increments</li>
        <li><Link href="https://kpi.cnuc.nu">kpi</Link> tiny tool to calculate inflation of Sweden normalized cost</li>
        <li><Link href="https://snow.cnuc.nu">snow</Link> holiday greeting card</li>
        <li><Link href="http://sida.cnuc.nu">sida</Link> award winning contibution to OpenHack hackathon</li>
        <li><Link href="https://click.cnuc.nu">click</Link> keycode testing tool, press a key. (Unfortunate UI)</li>
      </ul>
    </section>
    </Layout>
  );
}
