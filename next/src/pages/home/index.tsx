import Head from "next/head";
import TextCard from "../components/TextCard";
import styles from "./home.module.css";
export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className={`${styles["card-grid"]}`}>
                <TextCard>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore nostrum corporis dolores esse sapiente dignissimos
                    nobis iusto veniam, recusandae itaque temporibus totam omnis
                    commodi ipsum perferendis suscipit? Beatae, laudantium
                    possimus!
                </TextCard>
                <TextCard>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore nostrum corporis dolores esse sapiente dignissimos
                    nobis iusto veniam, recusandae itaque temporibus totam omnis
                    commodi ipsum perferendis suscipit? Beatae, laudantium
                    possimus!
                </TextCard>
                <TextCard>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore nostrum corporis dolores esse sapiente dignissimos
                    nobis iusto veniam, recusandae itaque temporibus totam omnis
                    commodi ipsum perferendis suscipit? Beatae, laudantium
                    possimus!
                </TextCard>
                <TextCard>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore nostrum corporis dolores esse sapiente dignissimos
                    nobis iusto veniam, recusandae itaque temporibus totam omnis
                    commodi ipsum perferendis suscipit? Beatae, laudantium
                    possimus!
                </TextCard>
            </div>
        </>
    );
}
