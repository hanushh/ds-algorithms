
import dynamic from 'next/dynamic'

const disableSSR = { ssr: false };
const App = dynamic(() => import('../components/App'), disableSSR);


export default () => <div>Hello<App></App></div>;