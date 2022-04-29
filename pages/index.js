
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/App'), {
    loading: () => <p>...</p>,
    ssr: false,
  });


export default () => <div>Hello<App></App></div>;