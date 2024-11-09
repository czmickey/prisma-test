import styles from "./page.module.css";
import {PrismaClient} from "@prisma/client";

export default async function Home() {
    const client = new PrismaClient();
    const users = await client.user.findMany({include: {Books: true}})

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Hello 👋
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                            <ul>
                                {user.Books.map(book => (
                                    <li key={book.id}>{book.title} ({book.Description})</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
