import '@/styles/globals.css'
import Layout from '../components/layout/Layout'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'jotai';
import { Suspense } from 'react';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Suspense fallback="loading">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  )
}

// 서버로 요청이 왔을 때 가장 먼저 실행되는 컴포넌트
// 최상위 컴포넌트
// 프로퍼티를 받고 구조 분해 할당을 하여 정보를 꺼낸다. (Component, pageProps)
// Component : 실제 렌더링될 페이지 컨텐츠를 저장하고 있는 프로퍼티
// pageProps : 페이지가 받는 특수 프로퍼티