
import dynamic from 'next/dynamic'

const disableSSR = { ssr: false };
const Test = dynamic(() => import('../components/test'), disableSSR);


export default () => <div>Hello<Test></Test></div>;