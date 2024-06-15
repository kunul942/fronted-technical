import { Layout, Newsletter } from '@/components';
import { newsletterData } from '@/constant';

export default function Home() {
    return (
        <Layout title={'Newsletter Page'}>
            <Newsletter {...newsletterData} />
        </Layout>
    );
}
