// 경로 : /blog

import Link from "next/link";
import { Fragment } from "react";

function BlogPage() {
    return (
        <Fragment>
            
        </Fragment>
    )
}

export default BlogPage;

// next에서 제공하는 Link를 이용해 SPA에도 위배되지도 않고 링크를 활용할 수 있다.
// HTML을 불러들이지 않고 이동. React에서 렌더링. 
// 페이지 상태 관리 및 저장. 

// Link : a 태그를 렌더링하고 클릭을 감지해 새로운 HTML 페에지를 받는 요청을 막는다. 대신 컴포넌트를 읽어들이고 URL을 변경시키는 작업을 수행.